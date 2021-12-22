import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item.component";

import { selectDirectorySections } from './diretory.seletor';

import './directory.styles.scss';

const Directory = ({sections}) => {
console.log(sections)
    return(
        <div className="directory-menu">
            {
                sections.map( section => (
                    <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl}  linkUrl = {section.linkUrl} linksize={section.size}/>
                ))
            }
        </div>
    )
 }


const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);