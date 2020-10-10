import React,{ useRef } from 'react';
import styles from './section3.module.css';
import cx from 'classnames';
import content from '../../../../data/content.json';
import {
  FaAndroid,
  FaAngular,
  FaAws,
  FaCss3,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaVuejs,
  FaWordpress
} from 'react-icons/fa';
import { useInView } from '../../../../hooks';

interface TProps {}

/**
 * Section3 of Body componet
 *
 */
const Section3: React.FC<TProps> = (): JSX.Element => {
  const currentSection = useRef(null); // gets ref for section
  const inView = useInView(currentSection);

  return (
    <>
      <div ref={currentSection} className={cx(styles.section3, 'my-20 flex-col w-full')}>
        <div
          className={
            'lg:mx-20 self-start center-child flex-col mx-10 max-w-4xl'
          }
        >
          <div
            className={
              'sm:text-4xl text-3xl self-start font-bold leading-tight line-3 pt-5 relative'
            }
          >
            {content.techHeader}
          </div>
          <div className={'self-start py-4 text-xl'}>{content.techSub}</div>
        </div>
        {/* <div
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
        </div> */}
        <div className={cx(styles.marquee, 'lg:mx-20 mx-10 mt-10')}>
          <ul className={styles['marquee-content']}>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaJava />
            </li>
            <li>
              <FaPython />
            </li>
            <li>
              <FaPhp />
            </li>
            <li>
              <FaHtml5 />
            </li>
            <li>
              <FaCss3 />
            </li>
            <li>
              <FaDatabase />
            </li>
            <li>
              <FaReact />
            </li>
            <li>
              <FaVuejs />
            </li>
            <li>
              <FaAngular />
            </li>
            <li>
              <FaNodeJs />
            </li>
            <li>
              <FaWordpress />
            </li>
            <li>
              <FaAws />
            </li>
            <li>
              <FaDocker />
            </li>
            <li>
              <FaAndroid />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Section3;
