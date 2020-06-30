import React from 'react';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Underline } from '../../assets/underline.svg';

const MenuItem = ({ imageUrl, title, size, history, linkUrl, match }) => (
  <div 
    role='link'
    className={`${ size ? size : '' } menu-item`}
    onClick={() => history.push(`/${linkUrl}`)}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h2 className='title'>{ title }</h2>
      <Underline className='title-underline'/>
      <span className='subtitle'>Shop now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
