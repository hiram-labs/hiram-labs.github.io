import React from 'react';
import styles from './body.module.css';
import cx from 'classnames';
import Section1 from './sections/section1/Section1';
import Section2 from './sections/section2/Section2';
import Section3 from './sections/section3/Section3';
import Section4 from './sections/section4/Section4';
import Section5 from './sections/section5/Section5';

interface TProps {}

/**
 * Body componet
 *
 */
const Body: React.FC<TProps> = (): JSX.Element => {
  return (
    <div className={cx(styles.container)}>
      {/* landing section */}
      <div className={'w-screen center-child bg-customBg text-customText'}>
        <Section1 />
      </div>
      {/* short intro section */}
      <div className={'w-screen center-child bg-customText text-customBg'}>
        <Section2 />
      </div>
      {/* tech stack section */}
      <div className={'w-screen center-child bg-customBg text-customText'}>
        <Section3 />
      </div>
      {/* projects section */}
      <div className={'w-screen center-child bg-customText text-customBg'}>
        <Section4 />
      </div>
      {/* contact section */}
      <div className={'w-screen center-child bg-customBg text-customText'}>
        <Section5 />
      </div>
      {/* space*/}
      <div className={'w-screen center-child bg-customText text-customBg'}>
        <div className={'h-32'} />
      </div>
    </div>
  );
};

export default Body;
