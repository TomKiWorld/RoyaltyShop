import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({title, items, history, match }) => (
  <section className='collection-preview'>
    <h2>{title}</h2>
    <section className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...itemProps }) => (
          <CollectionItem 
            key={id} 
            { ...itemProps } />
        ))
      }
    </section>
  </section>
);

export default withRouter(CollectionPreview);
