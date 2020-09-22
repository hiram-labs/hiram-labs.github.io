import React, { useContext } from 'react';
import styles from './section4.module.css';
import cx from 'classnames';
import content from '../../../../data/content.json';

interface TProps {}

/**
 * Section3 of Body componet
 *
 */
const Section4: React.FC<TProps> = (): JSX.Element => {
  return (
    <>
      <div className={cx(styles.section4, 'center-child')}>
        <div className={'my-20 center-child flex-col'}>
          <div className={'lg:mx-20 mx-10 max-w-3xl self-start'}>
            <div
              className={
                'text-4xl font-bold leading-tight relative line-1 pt-5'
              }
            >
              {content.projectsHeader}
            </div>
            <div className={'py-4 text-xl'}>{content.projectsSub}</div>
          </div>
          <div className={'sm:grid sm:grid-cols-2 lg:mx-20 mt-10 mx-10'}>
            {content.projects.map((e, i, arr) => (
              <div
                key={e.name}
                className={cx(
                  styles['image-wrapper'],
                  i === 0 && 'sm:rounded-tl-lg sm:rounded-t-none rounded-t-lg',
                  i === 1 && 'sm:rounded-tr-lg rounded-none',
                  i === arr.length - 2 && 'sm:rounded-bl-lg rounded-none',
                  i === arr.length - 1 &&
                    'sm:rounded-bl-none rounded-bl-lg rounded-br-lg',
                  'center-child cursor-pointer overflow-hidden'
                )}
              >
                <img src={'assets/images/projects/' + e.image} alt={e.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Section4;
