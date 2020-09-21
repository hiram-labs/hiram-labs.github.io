import React, { useRef, useState } from 'react';
import styles from './section1.module.css';
import cx from 'classnames';
import { useResponsiveTypo } from '../../../../hooks/index';
import { FiArrowRight } from 'react-icons/fi';
import Hoc from '../../../../libraries/Hoc';
import content from '../../../../data/content.json';
import Dropdown from '../../../buttons/Dropdown';

interface TProps {}
/**
 * Section1 of Body componet
 *
 */
const Section1: React.FC<TProps> = (): JSX.Element => {
  const bannerMsgRef = useRef<HTMLDivElement>(null); // gets ref for bannerMsgRef
  useResponsiveTypo(bannerMsgRef, 65); // trigger the hook on load

  return (
    <>
      <div
        className={cx(
          styles.section1,
          'center-child flex-col space-y-10 max-w-6xl'
        )}
      >
        {/* banner and sub banner text */}
        <div className={'px-10 text-center'}>
          <div
            ref={bannerMsgRef}
            className={
              'text-6xl uppercase font-black text-shadow-2xl animate-slide-in-top'
            }
          >
            {content.bannerMsg}
          </div>
          <div
            className={
              'lg:text-4xl sm:text-2xl text-customComplementaryPink font-bold  text-shadow-xl animate-slide-in-bottom'
            }
          >
            {content.bannerSub}
          </div>
        </div>
        {/* services buttons */}
        {/* large screen buttons*/}
        <div
          className={
            'lg:grid lg:grid-cols-4 grid-cols-2 gap-10 max-w-4xl hidden'
          }
        >
          {content.services.map((e) => (
            <div key={e.name} className={'center-child animate-grow'}>
              <Hoc>
                <button
                  className={
                    'hvr-icon-wobble-horizontal uppercase text-lg font-extrabold py-2 px-4 btn-3d rounded-lg '
                  }
                >
                  <div className="center-child w-32 gap-2">
                    <div>{e.name}</div>
                    <FiArrowRight className={'hvr-icon text-lg'} />
                  </div>
                </button>
              </Hoc>
            </div>
          ))}
        </div>
        {/* small screen buttons */}
        <div
          className={
            'lg:hidden center-child flex-col max-w-4xl animate-slide-in-top'
          }
        >
          <Dropdown label='our services' content={content.services}/>
        </div>
      </div>
    </>
  );
};
export default Section1;
