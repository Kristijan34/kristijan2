import React, { Component } from 'react';

class UserListitem extends Component {
    constructor(props){
        super();
        console.log(props);
    }

    




    render() {
        const {cocktailName} = this.props;
    return <li>{cocktailName}</li>
    }
}

export default UserListitem;