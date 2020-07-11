import React from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const FormInput = ({ label, error, handleChange, ...otherProps}) => {
  return (
    <div className='group'>
      <input 
        className='form-input'
        value={ otherProps.email } 
        onChange={ handleChange }
        { ...otherProps } />
        {
          label ? 
          (<label className={`${ otherProps.value.length ? 'shrink' : '' } form-input-label`}>
            {label}
          </label>)
          : null
        }
        {
          error ?
          (
            <ErrorMessage>{error}</ErrorMessage>
          )
          : null
        }
    </div>
  );
}

export default React.memo(FormInput);
