import React, { useEffect, useState, useContext, useRef } from 'react';
import styles from './header.module.css';
import cx from 'classnames';
import { FiGrid } from 'react-icons/fi';
import content from '../../data/content.json';
import { stringHalfer, arrayHalfer } from '../../libraries/dataParser';
import { styleAttributeEditor } from '../../libraries/domLogic';
import { AppContext } from '../../hooks';

interface TProps {
  scrollTriggerValue?: number;
}

/**
 * Header componet
 *
 */
const Header: React.FC<TProps> = (props): JSX.Element => {
  const thisComponent = useRef<HTMLDivElement>(null); //get the current node reference for this component
  const [navIcon, setnavIcon] = useState(false); // handles small screen navbar open or closed state
  const scrollUnit = useContext(AppContext).scrollUnit; // get the amount of scroll as a number unit
  const trigger =
    useContext(AppContext).scrollDirection?.(props.scrollTriggerValue!) === 'UP'
      ? true
      : false; // gets users scroll direction from dataStore
  const screenSize = useContext(AppContext).breakpoint; // get the current screen size

  // handles navbar fade and slide out logic on scroll
  screenSize === 'lg' || screenSize === 'xl'
    ? styleAttributeEditor({
        element: thisComponent.current?.children.item(1)?.children,
        style:
          scrollUnit! < props.scrollTriggerValue!
            ? `opacity: ${1 - scrollUnit! / props.scrollTriggerValue!}`
            : 'opacity: 0'
      })
    : styleAttributeEditor({
        element: thisComponent.current?.children.item(1)?.children,
        style: 'opacity: 1'
      });

  // trigger &&
  //   styleAttributeEditor({
  //     element: thisComponent.current?.children.item(0),
  //     style: 'transform: translateY(0%); transition: transform 5s'
  //   });

  return (
    <div
      ref={thisComponent}
      className={cx(
        styles.container,
        trigger ? 'bg-opacity-75' : null,
        'center-child bg-customSecondary relative'
      )}
    >
      {/* big screen navbar */}

      {/* on scroll big screen navbar */}
      <div
        className={cx(
          trigger ? 'lg:opacity-100 ' : null,
          'lg:fixed lg:w-screen lg:flex items-center justify-between top-0 py-4 px-10  bg-customSecondary shadow-2xl opacity-0 z-50 hidden'
        )}
      >
        <div className={'flex justify-start space-x-20 col-start-1 w-16'}>
          {logoSvg}
        </div>
        <div className={'flex justify-end space-x-20 col-start-2'}>
          {content.navLinks.map((e) => (
            <div
              className={
                'hvr-underline-from-center uppercase text-lg font-extrabold cursor-pointer text-shadow-3d'
              }
              key={e + ' sticky'}
              tabIndex={0}
            >
              {e}
            </div>
          ))}
        </div>
      </div>
      {/* onload big screen navbar */}
      <div
        className={cx(
          trigger ? 'lg:max-w-none' : null,
          'sm:my-8 grid grid-cols-10 gap-5 max-w-6xl my-5'
        )}
      >
        {/* sets half of the links left */}
        {
          <div
            className={
              'lg:flex hidden animate-slide-in-left space-x-20 col-span-4 items-center justify-between'
            }
          >
            {arrayHalfer(content.navLinks)[0].map((e) => (
              <div
                className={
                  'hvr-underline-from-center uppercase text-lg font-extrabold cursor-pointer text-shadow-3d'
                }
                key={e}
                tabIndex={0}
              >
                {e}
              </div>
            ))}
          </div>
        }
        {/* sets the company logo in the middle for large screens and handles small screen navbar logic */}
        <div
          className={cx(
            navIcon
              ? 'absolute top-0 left-0 animate-slide-in-top pt-16 bg-customSecondary shadow-lg rounded z-50'
              : 'relative',
            'lg:center-child lg:col-span-2 lg:w-auto lg:relative lg:pt-0 lg:bg-transparent lg:shadow-none lg:z-auto grid grid-cols-4 col-span-10 w-screen'
          )}
        >
          {/* company logo svg */}
          <div
            className={cx(
              navIcon ? 'hidden' : 'center-child',
              'lg:center-child sm:col-start-2 sm:col-span-2 sm:mx-0 col-start-1 w-full mx-10 cursor-pointer'
            )}
          >
            {/* medium screen company name left */}
            <div
              className={
                'lg:hidden sm:flex hidden animate-slide-in-left justify-end whitespace-no-wrap text-xl uppercase font-extrabold text-shadow-3d font-Herculanum'
              }
            >
              {stringHalfer(content.companyName)[0]}
            </div>
            <div>{logoSvg}</div>
            {/* medium screen company name right */}
            <div
              className={
                'lg:hidden sm:flex hidden animate-slide-in-right justify-start whitespace-no-wrap text-xl uppercase font-extrabold text-shadow-3d font-Herculanum'
              }
            >
              {stringHalfer(content.companyName)[1]}
            </div>
            {/* small screen company name */}
            <div
              className={
                'sm:hidden animate-slide-in-right whitespace-no-wrap text-xl uppercase font-extrabold font-Herculanum text-shadow-3d ml-2'
              }
            >
              <div>{stringHalfer(content.companyName)[0]}</div>
              <div>{stringHalfer(content.companyName)[1]}</div>
            </div>
            {/* small screen navbar icon */}
          </div>
          <div
            className={
              'lg:hidden animate-grow col-start-4 center-child text-3xl cursor-pointer'
            }
            onClick={() => setnavIcon(!navIcon)}
          >
            <FiGrid />
          </div>
          {/* dropdown field */}
          <div
            className={cx(
              navIcon ? 'center-child' : 'hidden',
              'lg:hidden col-start-2 col-span-2 flex-col space-y-10 w-auto text-lg font-extrabold mb-10 cursor-pointer'
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
        {
          <div
            className={
              'lg:flex hidden animate-slide-in-right space-x-20 col-span-4 items-center justify-between'
            }
          >
            {arrayHalfer(content.navLinks)[1].map((e) => (
              <div
                className={
                  'hvr-underline-from-center uppercase text-lg font-extrabold cursor-pointer text-shadow-3d'
                }
                key={e}
                tabIndex={0}
              >
                {e}
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

// sets default props
Header.defaultProps = {
  scrollTriggerValue: 50
};

// create a react component from the logo svg
const logoSvg = React.createElement(
  require('../../../dev/assets/images/logo/log_raw.svg'),
  {
    className: 'nav-logo w-20 sm:animate-grow'
  }
);

export default Header;
