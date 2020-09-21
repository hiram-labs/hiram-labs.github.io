import React, { useContext } from 'react';
import styles from './section4.module.css';
import cx from 'classnames';
import content from '../../../../data/content.json';
import { AppContext } from '../../../../hooks/index';

interface TProps {}

/**
 * Section3 of Body componet
 *
 */
const Section4: React.FC<TProps> = (): JSX.Element => {
  const screenSizeUnit = useContext(AppContext).breakpointUnit; // get the current screen size

  return (
    <>
      <div className={cx(styles.section4, 'center-child w-full')}>
        <div className={'sm:grid sm:grid-cols-2 lg:mx-20 w-full my-10 mx-10'}>
          {content.projects.map((e, i, arr) => (
            <div
              key={e.name}
              className={cx(
                styles['image-wrapper'],
                i === 0 && 'rounded-tl-lg',
                i === 1 && 'rounded-tr-lg',
                i === arr.length - 2 && 'rounded-bl-lg',
                i === arr.length - 1 && 'rounded-br-lg',
                'h-64 cursor-pointer overflow-hidden'
              )}
            >
              <img
                className={'w-full'}
                src={'assets/images/projects/' + e.image}
                alt={e.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Section4;
