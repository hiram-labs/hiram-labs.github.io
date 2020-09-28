import React from 'react';
import styles from './section3.module.css';
import cx from 'classnames';
import content from '../../../../data/content.json';
import path from 'path';

interface TProps {}

/**
 * Section3 of Body componet
 *
 */
const Section3: React.FC<TProps> = (): JSX.Element => {
  return (
    <>
      <div className={cx(styles.section3, 'my-20 flex-col w-full')}>
        <div
          className={
            'lg:mx-20 self-start center-child flex-col mx-10 max-w-4xl'
          }
        >
          <div
            className={
              'self-start text-4xl font-bold leading-tight line-3 pt-5 relative'
            }
          >
            {content.techHeader}
          </div>
          <div className={'self-start py-4 text-xl'}>{content.techSub}</div>
        </div>
        <div
          className={cx(
            styles['tech-images'],
            'lg:mx-20 mx-10 mt-10 overflow-hidden relative'
          )}
        >
          <div
            className={
              'w-full flex items-center space-x-16 pb-2 overflow-scroll'
            }
          >
            {content.tech.map((e, i, arr) => (
              <div className={cx(i === arr.length - 1 && 'pr-16')} key={e.name}>
                {React.createElement(
                  require('../../../../../dev/assets/images/tech/' + e.image),
                  {
                    className: 'w-20 sm:animate-grow'
                  }
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Section3;
