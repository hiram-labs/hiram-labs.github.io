import React from 'react';

interface TProps {
  header: JSX.Element;
  body: JSX.Element | string;
  footer: JSX.Element | string;
}

/**
 * Layout componet
 *
 * @property JSX.Element
 * @property JSX.Element
 * @property JSX.Element
 */
const Layout: React.FC<TProps> = ({ header, body, footer }): JSX.Element => {
  return (
    <div
      className={
        'min-h-screen bg-customBg text-customText flex flex-col item-center justify-between overflow-hidden relative'
      }
    >
      {header}
      {body}
      {footer}
    </div>
  );
};

export default Layout;
