import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../CollectionItem/CollectionItem';
import { ReactComponent as Underline } from '../../assets/underline.svg';

const CollectionPreview = ({title, items, history, match, routeName }) => (
  <section className='collection-preview container'>
    <h2 
      className='collection-title'
      role='link'
      onClick={() => history.push(`${match.path}/${routeName}`)}>{title}
      <span>See more</span></h2>
      <Underline className='title-underline'/>
    <section className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem 
            key={item.id} 
            item={item} />
        ))
      }
    </section>
  </section>
);

export default React.memo(withRouter(CollectionPreview));
