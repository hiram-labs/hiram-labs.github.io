import React, { useContext } from 'react';
import styles from './section3.module.css';
import cx from 'classnames';
import content from '../../../../data/content.json';
import { AppContext } from '../../../../hooks/index';

interface TProps {}

/**
 * Section3 of Body componet
 *
 */
const Section3: React.FC<TProps> = (): JSX.Element => {
  const screenSizeUnit = useContext(AppContext).breakpointUnit; // get the current screen size

  return (
    <>
      <div className={cx(styles.section3, 'center-child w-full max-w-6xl')}>
        hello
      </div>
    </>
  );
};
export default Section3;

{
  /* <div
  className={cx(
    screenSizeUnit! < 900 ? 'flex w-screen overflow-x-scroll' : 'center-child',
    ' relative'
  )}
>
  <div className={'center-child self-start absolute w-full h-20'}>
    <div className={'absolute top-0 left-0 text-4xl font-bold mt-1 line-1'}>
      {content.projectsHeader}
    </div>
  </div>

  {[1, 2, 3].map((e) => (
    <div
      key={e}
      className={cx(styles.wrapper)}
      style={{ height: screenSizeUnit! < 900 ? '350px' : '' }}
    >
      <div className={cx(styles.card, 'shadow-2xl rounded-lg bg-pink-200')}>
        <div className={styles.image}>img</div>
        <div className={styles.story}>story</div>
      </div>
    </div>
  ))}
</div>; */
}
