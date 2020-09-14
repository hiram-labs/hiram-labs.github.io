import React, { useState } from 'react';
import styles from './header.module.css';
import cx from 'classnames';
import { FiGrid } from 'react-icons/fi';
import content from '../../data/content.json';

interface TProps {}

/**
 * Header componet
 *
 */
const Header: React.FC<TProps> = (): JSX.Element => {
  const [navIcon, setnavIcon] = useState(false); // handles small screen navbar open or closed state

  return (
    <div className={cx(styles.container, 'center-child')}>
      {/* big screen navbar */}
      <div className={'grid grid-cols-10 gap-5 max-w-6xl my-10'}>
        {/* sets half of the links left */}
        <div
          className={
            'lg:flex gap-20 col-span-4 items-center justify-between hidden'
          }
        >
          {content.navLinks
            .slice()
            .splice(0, Math.floor(content.navLinks.length / 2))
            .map((e) => (
              <div
                className={
                  'hvr-underline-from-center uppercase text-lg font-extrabold cursor-pointer'
                }
                key={e}
                tabIndex={0}
              >
                {e}
              </div>
            ))}
        </div>
        {/* sets the company logo in the middle for large screens and handles small screen navbar logic */}
        <div
          className={cx(
            navIcon
              ? 'absolute top-0 left-0 pt-16 bg-customBg shadow-2xl rounded'
              : 'relative',
            'lg:col-span-2 lg:w-auto lg:center-child lg:relative lg:mt-0 lg:bg-transparent lg:shadow-none col-span-10 w-screen grid grid-cols-4'
          )}
        >
          <div
            className={cx(
              navIcon ? 'hidden' : 'center-child',
              'lg:center-child w-20 col-start-3 -mx-10 cursor-pointer'
            )}
          >
            {React.createElement(
              require('../../../dev/assets/images/logo/log_raw.svg'),
              {
                className: 'nav-logo'
              }
            )}
          </div>
          <div
            className={
              'lg:hidden col-start-4 center-child text-3xl cursor-pointer'
            }
            onClick={() => setnavIcon(!navIcon)}
          >
            <FiGrid />
          </div>
          <div
            className={cx(
              navIcon ? 'center-child' : 'hidden',
              'lg:hidden col-start-2 col-span-2 flex-col gap-10 w-auto text-lg font-extrabold mb-10 cursor-pointer'
            )}
          >
            {content.navLinks.map((e) => (
              <div
                className={
                  'hvr-underline-from-center uppercase text-lg font-extrabold cursor-pointer'
                }
                key={e}
                tabIndex={0}
              >
                {e}
              </div>
            ))}
          </div>
        </div>
        {/* sets remaining of the links right */}
        <div
          className={
            'lg:flex gap-20 col-span-4 items-center justify-between hidden'
          }
        >
          {content.navLinks
            .slice()
            .splice(
              Math.floor(content.navLinks.length / 2),
              content.navLinks.length + 1
            )
            .map((e) => (
              <div
                className={
                  'hvr-underline-from-center uppercase text-lg font-extrabold cursor-pointer'
                }
                key={e}
                tabIndex={0}
              >
                {e}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

// services, projects, blog,  about, career, contact
