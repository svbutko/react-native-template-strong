/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Strong set of dependencies',
    image: 'img/home_feature_one.png',
    description: (
      <>
        Build primarily with <b>React Native Navigation, Redux Toolkit and TypeScript</b>.
          And other day-to-day useful dependencies.
      </>
    ),
  },
  {
    title: 'More than just a template',
    image: 'img/home_feature_two.svg',
    description: (
      <>
        Keep it simple stupid, test and component driven development, documentation and guides make it easy to use.
      </>
    ),
  },
  {
    title: 'Together we are stronger',
    image: 'img/home_feature_three.svg',
    description: (
      <>
          New feature, bug or issue?
          Participate in the development to make this template better for you and others.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
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
