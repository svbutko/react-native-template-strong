import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

interface IFeatureItem {
    title: string;
    image: string;
    description: JSX.Element;
}

function Feature({title, image, description}: IFeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img className={styles.featureSvg} alt={title} src={image}/>
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
                    <Feature
                        title={'Strong set of dependencies'}
                        image={'img/home_feature_one.png'}
                        description={(
                            <>
                                Build primarily with <b>React Native Navigation, Redux Toolkit and TypeScript</b>.
                                And other day-to-day useful dependencies.
                            </>
                        )}
                    />
                    <Feature
                        title={'More than just a template'}
                        image={'img/home_feature_two.svg'}
                        description={(
                            <>
                                Keep it simple stupid, test and component driven development, documentation and guides
                                make it easy to
                                use.
                            </>
                        )}
                    />
                    <Feature
                        title={'Together we are stronger'}
                        image={'img/home_feature_three.svg'}
                        description={(
                            <>
                                New feature, bug or issue?
                                Participate in the development to make this template better for you and others.
                            </>
                        )}
                    />
                </div>
            </div>
        </section>
    );
}
