import React from 'react';

import Directory from '../Directory/Directory';

const EmptyList = ({ title }) => {
  return (
    <div className='empty-title'>
      <h2>{ title }</h2>
      <p>Take a look at our new collection</p>
      <Directory />
    </div>
  );
}

export default EmptyList;
