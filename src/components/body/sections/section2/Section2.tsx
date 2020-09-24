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
      <div className={cx(styles.section2, 'center-child w-full')}>
        <div className={'lg:mx-20 grid grid-cols-6 gap-10 my-20 mx-10'}>
          <div
            className={cx(
              styles.image,
              'xl:col-span-3 lg:col-start-1 lg:col-span-2 sm:block hidden'
            )}
          />
          <div
            className={
              'xl:col-start-4 lg:col-start-3 lg:col-span-6 sm:col-start-2 sm:col-span-6 col-start-1 col-span-6'
            }
          >
            <div
              className={
                'text-4xl font-bold leading-tight relative line-2 pt-5'
              }
            >
              {content.introHeader}
            </div>
            <div className={'py-4 text-xl'}>{content.introSub}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
