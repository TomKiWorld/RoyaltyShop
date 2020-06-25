import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import Register from '../../components/Register/Register';

import './LoginPage.scss';

class LoginPage extends React.Component {
  render() {
    return (
      <section className='login-page container'>
        <SignIn />
        <Register />
      </section>
    );
  }
}

export default LoginPage;
