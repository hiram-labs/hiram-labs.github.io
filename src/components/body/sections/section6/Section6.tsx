import React from 'react';
import styles from './section6.module.css';
import cx from 'classnames';
import { FiClock } from 'react-icons/fi';
import content from '../../../../data/content.json';

interface TProps {}
/**
 * Section6 of Body componet
 *
 */
const Section6: React.FC<TProps> = (): JSX.Element => {
  return (
    <>
      <div className={cx(styles.section6, 'w-full')}>
        <div className={'lg:mx-20 mx-10 my-20'}>
          <div className={'max-w-3xl'}>
            <div
              className={
                'sm:text-4xl text-3xl font-bold leading-tight relative line-3 pt-5'
              }
            >
              {content.blogHeader}
            </div>
            <div className={'py-4 text-xl'}>{content.blogSub}</div>
          </div>
          <div
            className={
              'lg:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-6 mt-10'
            }
          >
            {content.blog.map((e) => (
              <div key={e.title} className={'center-child'}>
                <div
                  className={
                    'max-w-lg rounded-lg overflow-hidden hover:shadow-lg bg-white my-2'
                  }
                >
                  <div className={'h-40 overflow-hidden'}>
                    <img
                      className={'w-full'}
                      src={'assets/images/blog/' + e.image}
                      alt="post image"
                    />
                  </div>
                  <div className={'p-4 md:p-6'}>
                    <p
                      className={
                        'text-blue-500 font-semibold text-xs mb-1 leading-none'
                      }
                    >
                      {e.category}
                    </p>
                    <a
                      className={
                        'hvr-underline-from-center font-semibold mb-2 text-xl leading-tight sm:leading-normal cursor-pointer'
                      }
                      href="#"
                    >
                      <h3>{e.title}</h3>
                    </a>
                    <div className={'text-sm flex items-center'}>
                      <FiClock className={'mr-2'} />
                      <p className="leading-none">{e.date}</p>
                    </div>
                    <div
                      className={
                        'mt-6 pt-3 flex flex-no-wrap border-t overflow-scroll'
                      }
                    >
                      {e.hashtags.map((e) => (
                        <div
                          key={e}
                          className={
                            'text-xs mr-2 my-1 uppercase tracking-wider border rounded-full px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-pointer'
                          }
                        >
                          {'#' + e}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
