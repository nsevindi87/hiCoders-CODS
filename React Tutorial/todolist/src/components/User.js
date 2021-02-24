import React, { Component } from 'react'
import PropTypes from 'prop-types'



class User extends Component {
    render() {

        //Destruction
        const{name,department,salary}=this.props;
        return (
            <div>
               <ul>
                   <li>isim: {name}</li>
                   <li>Departman : {department}</li>
                   <li>Maas: {salary} </li>
               </ul>
            </div>
        )
    }
}
User.defaultProps={
    name:"Bilgi Yok",
    salary:"Bilgi Yok",
    department:"Bilgi Yok"
}
User.propTypes={
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
}

export default User;