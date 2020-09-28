import React, { Component } from 'react';
import UsersListitem from './UsersListItem';

class UsersList extends Component {
    render() {
        return (
            <div>
                <ul className="user-list">
                    <UsersListitem cocktailName="Strawberry Mojito"/>
                    <UsersListitem cocktailName="Manhattan"/>
                    <UsersListitem cocktailName="Whiskey Sour"/>
                    <UsersListitem cocktailName="The Godfather"/>
                </ul>
            </div>
        );
    }

}

export default UsersList;