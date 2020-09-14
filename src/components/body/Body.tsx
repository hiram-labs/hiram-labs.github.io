import React from 'react';
import styles from './body.module.css';
import cx from 'classnames';
import { FiArrowRight } from 'react-icons/fi';
import content from '../../data/content.json';

interface TProps {}

/**
 * Body componet
 *
 */
const Body: React.FC<TProps> = (): JSX.Element => {
  return (
    <div className={cx(styles.container, 'center-child')}>
      <div className={'container max-w-6xl center-child flex-col'}>
        <div className={'text-6xl uppercase font-black text-center px-10'}>
          {content.bannerMsg}
        </div>
        <div className={' text-4xl text-pink-600 font-bold text-center'}>
          {content.bannerSub}
        </div>
        <div
          className={'grid lg:grid-cols-4 grid-cols-2 my-10 gap-10 max-w-4xl'}
        >
          {content.services.map((e) => (
            <div key={e} className={'center-child'}>
              <button
                className={
                  'hvr-icon-wobble-horizontal uppercase text-lg font-extrabold py-2 px-4 border-4 border-white rounded'
                }
              >
                <div className="center-child w-32 gap-2">
                  <div>{e}</div>
                  <FiArrowRight className={'hvr-icon text-lg'} />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
