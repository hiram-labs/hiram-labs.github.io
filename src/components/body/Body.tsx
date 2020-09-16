import React, { useRef } from 'react';
import styles from './body.module.css';
import cx from 'classnames';
import { useResponsiveTypo } from '../../hooks/index';
import { FiArrowRight } from 'react-icons/fi';
import content from '../../data/content.json';

interface TProps {}

/**
 * Body componet
 *
 */
const Body: React.FC<TProps> = (): JSX.Element => {
  const bannerMsgRef = useRef<HTMLDivElement>(null); // gets ref for bannerMsgRef
  useResponsiveTypo(bannerMsgRef, 65); // trigger the hook on load

  return (
    <div className={cx(styles.container, 'center-child')}>
      <div className={'container max-w-6xl px-4 center-child flex-col'}>
        <div
          ref={bannerMsgRef}
          className={
            'text-6xl uppercase font-black text-center px-10 text-shadow-2xl'
          }
        >
          {content.bannerMsg}
        </div>
        <div
          className={
            'lg:text-4xl sm:text-2xl text-customComplementaryPink font-bold text-center text-shadow-xl'
          }
        >
          {content.bannerSub}
        </div>
        <div
          className={'grid lg:grid-cols-4 grid-cols-2 my-10 gap-10 max-w-4xl'}
        >
          {content.services.map((e) => (
            <div key={e} className={'center-child'}>
              <button
                className={
                  'hvr-icon-wobble-horizontal uppercase text-lg font-extrabold py-2 px-4 border-2 border-customText rounded-lg'
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
