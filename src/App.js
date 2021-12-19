import React, { Component } from 'react';
import {Route, Switch, Redirect} from'react-router-dom';

import {connect} from 'react-redux';

import './App.css';




import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {CreateUserProfileDocument, auth } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';


class App extends Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null

componentDidMount(){

  const {setCurrentUser} = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await   CreateUserProfileDocument(userAuth);

      userRef.onSnapshot( snapshot => {
       setCurrentUser({
          id:snapshot.id,
          ...snapshot.data()
        }
      )
      })
     
    }
    setCurrentUser(userAuth)
  })


}

componentWillUnmount(){
  this.unsubscribeFromAuth()
}

  render() {
    return(
    <div>
      
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage}/>
          <Route  exact path='/signin' 

            render={() => 
            this.props.currentUser? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          }

          />
        </Switch>
  
    </div>

  )}
}

const mapStateToProps = ( {user} ) => {
  return {
    currentUser:user.currentUser
  }
}

const maptDispatchToProps = (dispatch) => {
  return {
    
  setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}
export default connect(mapStateToProps , maptDispatchToProps )(App);
