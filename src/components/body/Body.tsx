import React from 'react';
import styles from './body.module.css';
import cx from 'classnames';
import Section1 from './sections/section1/Section1';
import Section2 from './sections/section2/Section2';
import Section3 from './sections/section3/Section3';
import Section4 from './sections/section4/Section4';

interface TProps {}

/**
 * Body componet
 *
 */
const Body: React.FC<TProps> = (): JSX.Element => {
  return (
    <div className={cx(styles.container)}>
      {/* landing section */}
      <div
        className={
          'w-screen center-child bg-customBg text-customText overflow-hidden'
        }
      >
        <Section1 />
      </div>
      {/* short intro section */}
      <div
        className={
          'w-screen center-child bg-customText text-customBg overflow-hidden'
        }
      >
        <Section2 />
      </div>
      {/* tech stack section */}
      <div
        className={
          'w-screen center-child bg-customBg text-customText overflow-hidden'
        }
      >
        <Section3 />
      </div>
      {/* projects section */}
      <div
        className={
          'w-screen center-child bg-customText text-customBg overflow-hidden'
        }
      >
        <Section4 />
      </div>
    </div>
  );
};

export default Body;
