import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import UndrawDocusorousMountain from '@site/static/img/undraw_docusaurus_mountain.svg';
import UndrawDocusorousReact from '@site/static/img/undraw_docusaurus_react.svg';
import UndrawDocusorousTree from '@site/static/img/undraw_docusaurus_tree.svg';

type FeatureItem = {
  title: string;
  image: JSX.Element;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Design Principles',
    image: <UndrawDocusorousMountain width={'10%'} height={'10%'}/>,
    description: (
      <>
        Learn Design Principles that are at the heart of any good software. Learn principles like DRY, YAGNI, SOLID.
      </>
    ),
  },
  {
    title: 'Design Patterns',
    image: <UndrawDocusorousReact width={'10%'} height={'10%'}/>,
    description: (
      <>
        These are tried and tested solutions to common software design problems. Learn them to understand some common patterns that
        are followed in great software.
      </>
    ),
  },
  {
    title: 'Case Studies',
    image: <UndrawDocusorousTree width={'10%'} height={'10%'}/>,
    description: (
      <>
        Learn good software design from implementation of real world systems like Swiggy, Zomato, BookMyShow etc.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {image}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
