import React, { useRef, useContext } from 'react';
import styles from './body.module.css';
import cx from 'classnames';
import { AppContext, useResponsiveTypo } from '../../hooks/index';
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
  const screenSizeUnit = useContext(AppContext).breakpointUnit; // get the current screen size

  return (
    <div className={cx(styles.container, 'center-child flex-col')}>
      {/* landing section */}
      <div
        className={cx(
          styles.section1,
          'container center-child flex-col max-w-6xl m-10'
        )}
      >
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
            <div key={e.name} className={'center-child'}>
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
            </div>
          ))}
        </div>
      </div>
      {/* short intro section */}
      <div
        className={cx(
          styles.section3,
          'lg:px-40 w-screen bg-customText text-customBg py-20 px-10'
        )}
      >
        <div className={'grid grid-cols-5'}>
          <div
            className={
              'lg:col-start-3 sm:col-start-2 lg:col-span-3 sm:col-span-4 col-start-1 col-span-5'
            }
          >
            <div className={'text-4xl font-bold leading-tight relative line-2'}>
              {content.introMsg}
            </div>
            <div className={'py-4 text-xl'}>{content.introSub}</div>
          </div>
        </div>
      </div>
      {/* projects section */}
      <div className={cx(styles.section3)}>
        <div
          className={cx(
            screenSizeUnit! < 900
              ? 'flex w-screen overflow-x-scroll'
              : 'center-child',
            ' relative'
          )}
        >
          <div className={'center-child self-start absolute w-full h-20'}>
            <div
              className={'absolute top-0 left-0 text-4xl font-bold mt-1 line-1'}
            >
              {content.projectsHeader}
            </div>
          </div>

          {[1, 2, 3].map((e) => (
            <div
              key={e}
              className={cx(styles.wrapper)}
              style={{ height: screenSizeUnit! < 900 ? '350px' : '' }}
            >
              <div
                className={cx(styles.card, 'shadow-2xl rounded-lg bg-pink-200')}
              >
                <div className={styles.image}>img</div>
                <div className={styles.story}>story</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* services section */}
      <div
        className={cx(
          styles.section4,
          'w-full bg-customText text-customBg py-20 px-10'
        )}
      >
        <div>{content.servicesHeader}</div>
      </div>
    </div>
  );
};

export default Body;
