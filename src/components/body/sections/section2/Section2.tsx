import React from 'react';
import styles from './section2.module.css';
import cx from 'classnames';
import content from '../../../../data/content.json';

interface TProps {}
/**
 * Section1 of Body componet
 *
 */
const Section2: React.FC<TProps> = (): JSX.Element => {
  return (
    <>
      <div className={cx(styles.section2, 'center-child w-full max-w-6xl')}>
        <div className={'lg:mx-20 grid grid-cols-5 my-10 mx-10'}>
          <div
            className={
              'lg:col-start-3 lg:col-span-5 sm:col-start-2 sm:col-span-5 col-start-1 col-span-5'
            }
          >
            <div className={'text-4xl font-bold leading-tight relative line-2'}>
              {content.introMsg}
            </div>
            <div className={'py-4 text-xl'}>{content.introSub}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
