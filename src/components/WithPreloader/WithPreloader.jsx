import React from 'react';

const WithPreloader = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? 
  (
    <div className='preloader-overlay'>
      <div className='preloader-container' />
    </div>
  ) : (
  <WrappedComponent { ...otherProps }/>
  )
}

export default WithPreloader;
