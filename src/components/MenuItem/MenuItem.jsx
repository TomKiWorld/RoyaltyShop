import React from 'react';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Underline } from '../../assets/underline.svg';

const PUBLIC_URL = process.env.PUBLIC_URL;

const MenuItem = ({ imageUrl, title, size, history, linkUrl }) => (
  <div 
    role='link'
    className={`${ size ? size : '' } menu-item pointer`}
    onClick={() => history.push(`${PUBLIC_URL}/${linkUrl}`)}>
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

export default React.memo(withRouter(MenuItem));
