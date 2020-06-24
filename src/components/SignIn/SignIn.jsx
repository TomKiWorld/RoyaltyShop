import React from 'react';

import FormInput from '../../components/FormInput/FormInput';
import CtaButton from '../../components/CtaButton/CtaButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      emailErr: '',
      password: '',
      passwordErr: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { 
      email,
      password
    } = this.state;

    if (!email) {
      this.setState({ emailErr: 'Please enter your Email to continue' });
      return;
    }

    if (!password) {
      this.setState({ passwordErr: 'Please enter your Email to continue' });
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        emailErr: '',
        password: '',
        passwordErr: ''
      })
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }

  render() {
    const { 
      email,
      emailErr,
      password,
      passwordErr
    } = this.state;

    return (
      <section className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={ this.handleSubmit }>
          <FormInput 
            label='Email'
            error={emailErr}
            name='email' 
            type='email' 
            value={ email } 
            handleChange={ this.handleChange }
            required />
          <FormInput 
            label='Password'
            error={passwordErr}
            name='password' 
            type='password' 
            value={ password } 
            handleChange={ this.handleChange }
            required />
          <div className='buttons'>
            <CtaButton type='submit'>Sign In</CtaButton>
            <CtaButton onClick={signInWithGoogle}>
              Sign in with Google
            </CtaButton>
          </div>
        </form>
      </section>
    )
  }
}

export default SignIn;
