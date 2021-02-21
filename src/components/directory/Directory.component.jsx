import React from 'react'
import MenuItem from '../menu-item/MenuItem.component';
import SECTIONS from './directory.data'
import './directory.styles.scss'


class Directory extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            sections: SECTIONS
        }
    }
    

    render(){
        return(
            <div className="directory-menu"> 
                {this.state.sections.map(({id, ...otherSectionProp}) => (
                    <MenuItem key={id} {...otherSectionProp} />
                ))}
            </div>
        )
    }

}

export default Directory