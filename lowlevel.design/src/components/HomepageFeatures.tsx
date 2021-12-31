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
    title: 'Easy to Use',
    image: <UndrawDocusorousMountain width={'10%'} height={'10%'}/>,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    image: <UndrawDocusorousReact width={'10%'} height={'10%'}/>,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    image: <UndrawDocusorousTree width={'10%'} height={'10%'}/>,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
