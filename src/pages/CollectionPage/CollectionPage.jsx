import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { selectCollection } from '../../redux/shop/shop.selectors';
import { selectSection } from '../../redux/directory/directory.selectors';

import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import HeaderTitleBlock from '../../components/HeaderTitleBlock/HeaderTitleBlock';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import BenefitsBanner from '../../components/BenefitsBanner/BenefitsBanner';

import './CollectionPage.scss';

const PUBLIC_URL = process.env.PUBLIC_URL;

const CollectionPage = ({ collection, section, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [collection]);

  if (!collection || !section) {
    return <Redirect to={`${PUBLIC_URL}/not-found`} />;
  }
  const { title, items } = collection;
  const { imageUrl } = section;

  return (
  <section className='collection-page'>
    <HeaderBanner imageUrl={imageUrl}>
      <HeaderTitleBlock 
        title={`Royalty ${title}`}
        subtitle={`${new Date().getFullYear()} Collection`}
      />
    </HeaderBanner>
    <p 
      role='link'
      className='container back-link' 
      onClick={() => history.push(`${PUBLIC_URL}/shop`)}>
      &#10594; Back to Collections</p>
    <div className='collection-items container'>
      {
        items.map(item => (
          <CollectionItem 
            key={item.id} 
            item={item} />
        ))
      }
    </div>
    <BenefitsBanner />
  </section>
)};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  section: selectSection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
