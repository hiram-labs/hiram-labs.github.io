import React from 'react';
import styles from './body.module.css';
import cx from 'classnames';
import Section1 from './sections/section1/Section1';
import Section2 from './sections/section2/Section2';

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
      {/* projects section */}

      {/* services section */}
    </div>
  );
};

export default Body;
