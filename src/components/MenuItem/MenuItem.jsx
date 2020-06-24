import React from 'react';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ imageUrl, title, size, history, linkUrl, match }) => (
  <div 
    className={`${ size ? size : '' } menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h2 className='title'>{ title }</h2>
      <span className='subtitle'>Shop now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
