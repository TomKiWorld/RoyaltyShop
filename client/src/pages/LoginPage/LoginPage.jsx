import React from 'react';

import PageTitle from '../../components/PageTitle/PageTitle';
import SignIn from '../../components/SignIn/SignIn';
import Register from '../../components/Register/Register';
import { ReactComponent as Underline } from '../../assets/underline.svg';

import './LoginPage.scss';

class LoginPage extends React.Component {
  render() {
    return (
      <section className='login-page container'>
        <PageTitle title={'Sign In!'}/>
        <div className='login-content'>
          <SignIn />
          <Register />
        </div>
      </section>
    );
  }
}

export default LoginPage;
