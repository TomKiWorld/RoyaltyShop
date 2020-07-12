import React from 'react';
import { ReactComponent as Underline } from '../../assets/underline.svg';

const PageTitle = ({ title }) => (
  <React.Fragment>
    <h1 className='page-title'>{ title }</h1>
    <Underline className='page-title-underline'/>
  </React.Fragment>
);

export default React.memo(PageTitle);
