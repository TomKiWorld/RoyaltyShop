import React from 'react';
import SHOP_DATA from './ShopData';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import './ShopPage.scss';

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;
    return (
      <section className='shoppage container'>
        <h1>Collections</h1>
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview 
              key={id} 
              { ...otherCollectionProps }/>
          ))
        }
      </section>
    )
  }
}

export default ShopPage;
