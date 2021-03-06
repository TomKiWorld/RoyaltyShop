import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/FormInput/FormInput';
import CtaButton from '../../components/CtaButton/CtaButton';

import { signUpStart } from '../../redux/user/user.actions';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      displayNameErr: '',
      email: '',
      emailErr: '',
      password: '',
      confirmPassword: '',
      passwordErr: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { 
      displayName, 
      email, 
      password, 
      confirmPassword
    } = this.state;

    const { signUpStart } = this.props;

    if (!displayName) {
      this.setState({ displayNameErr: 'Please enter your display name to continue' });
      return;
    }

    if (!email) {
      this.setState({ emailErr: 'Please enter your email to continue' });      
      return;
    }

    if (password !== confirmPassword) {
      this.setState({ passwordErr: 'Your passwords do not match' });
      return;
    }

    this.setState({
      displayNameErr: '',
      emailErr: '',
      passwordErr: ''
    });
    signUpStart({ displayName, email, password });

  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }

  render() {    
    const { 
      displayName, 
      displayNameErr, 
      email, 
      emailErr, 
      password, 
      confirmPassword, 
      passwordErr 
    } = this.state;

    return (
      <section className='register'>
        <h2 className='title'>New to RoyaltyShop?</h2>
        <span>Register with your email and password</span>

        <form onSubmit={ this.handleSubmit }>
          <FormInput 
            label='Display Name'
            error={displayNameErr}
            name='displayName' 
            type='text' 
            value={ displayName } 
            handleChange={ this.handleChange }
            required />
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
            name='password' 
            type='password' 
            value={ password } 
            handleChange={ this.handleChange }
            required />
          <FormInput 
            label='Confirm Password'
            error={passwordErr}
            name='confirmPassword' 
            type='password' 
            value={ confirmPassword } 
            handleChange={ this.handleChange }
            required />
          <div className='buttons'>
            <CtaButton type='submit'>Register</CtaButton>
          </div>
        </form>
      </section>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(Register);
