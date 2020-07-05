import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import Register from '../../components/Register/Register';
import { ReactComponent as Underline } from '../../assets/underline.svg';

import './LoginPage.scss';

class LoginPage extends React.Component {
  render() {
    return (
      <section className='login-page container'>
        <h1 className='page-title'>Sign In</h1>
        <Underline className='page-title-underline'/>
        <div className='login-content'>
          <SignIn />
          <Register />
        </div>
      </section>
    );
  }
}

export default LoginPage;
