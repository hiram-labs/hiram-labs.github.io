import React from 'react';
import styles from './section4.module.css';
import cx from 'classnames';
import content from '../../../../data/content.json';

interface TProps {}
/**
 * Section1 of Body componet
 *
 */
const Body: React.FC<TProps> = (): JSX.Element => {
  return (
    <>
      <div
        className={cx(
          styles.section4,
          'w-full bg-customText text-customBg py-20 px-10'
        )}
      >
        <div>{content.servicesHeader}</div>
      </div>
    </>
  );
};
