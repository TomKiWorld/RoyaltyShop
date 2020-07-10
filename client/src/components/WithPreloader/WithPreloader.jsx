import React from 'react';
import Preloader from '../Preloader/Preloader';

const WithPreloader = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? 
  (
    <Preloader />
  ) : (
  <WrappedComponent { ...otherProps }/>
  )
}

export default WithPreloader;
