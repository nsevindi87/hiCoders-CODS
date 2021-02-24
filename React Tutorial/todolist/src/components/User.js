import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
               <ul>
                   <li>isim: {this.props.name}</li>
                   <li>Departman : {this.props.department}</li>
                   <li>Maas: {this.props.salary} </li>
               </ul>
            </div>
        )
    }
}

export default User;