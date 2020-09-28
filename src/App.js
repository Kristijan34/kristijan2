import React from 'react';
import BaseLayout from './components/layout/BaseLayout';
import UsersList from './components/users/UsersList';
import './styles/main.css';

class App extends React.Component {
  render() {
    return (
      <BaseLayout>
        <UsersList />
      </BaseLayout>

    );

  }


}

export default App;
