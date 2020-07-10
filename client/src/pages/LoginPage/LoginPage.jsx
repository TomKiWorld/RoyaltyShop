import React, { useEffect }  from 'react';

import PageTitle from '../../components/PageTitle/PageTitle';
import SignIn from '../../components/SignIn/SignIn';
import Register from '../../components/Register/Register';

import './LoginPage.scss';

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

export default LoginPage;
