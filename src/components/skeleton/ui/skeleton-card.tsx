import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './skeleton-card.module.scss';

const SkeletonCard = () => (
  <div className={styles.skeleton}>
    <ContentLoader
      speed={2}
      width={300}
      height={445}
      viewBox='0 0 300 445'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <circle cx='150' cy='115' r='100' />
      <rect x='15' y='230' rx='10' ry='10' width='270' height='24' />
      <rect x='15' y='270' rx='10' ry='10' width='270' height='40' />
      <rect x='15' y='320' rx='10' ry='10' width='270' height='66' />
      <rect x='15' y='400' rx='10' ry='10' width='120' height='34' />
      <rect x='155' y='400' rx='10' ry='10' width='132' height='34' />
    </ContentLoader>
  </div>
);

export default SkeletonCard;
