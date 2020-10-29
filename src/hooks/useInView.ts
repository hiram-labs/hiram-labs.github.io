import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

// helper function to do the logic of comparing the innerHeight of the window to the top of the parsed element
const helper = (param: HTMLDivElement) => {
  if (param) {
    const intViewportHeight = window.innerHeight;
    const elementTopPosition = param.getBoundingClientRect().top;
    if (elementTopPosition < (intViewportHeight * 80) / 100) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

/**
 *React hook which listens for when an element parsed as parameter enters the viewport
 * @param div
 * @returns boolean
 */
// Hook to determine what referenced object is in view
export function useInView(div: React.MutableRefObject<HTMLDivElement | null>) {
  //set the initial state of the div element
  const [inView, setinView] = useState<boolean>(false);

  // eventlistner call back function to set state
  const scrollHandler = () => {
    setinView(helper(div.current!));
  };

  const _debounce = debounce(scrollHandler, 500);

  useEffect(() => {
    window.addEventListener('scroll', _debounce);

    return () => {
      window.removeEventListener('scroll', _debounce);
    };
  }, []);

  // triggers when to show element passed as param in document flow using visibility attribute
  useEffect(() => {
    inView
      ? div.current?.setAttribute('style', 'visibility: visible')
      : div.current?.setAttribute('style', 'visibility: hidden');
  }, [inView]);

  return inView;
}
