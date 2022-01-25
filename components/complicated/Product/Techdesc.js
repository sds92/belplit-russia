import React from 'react';
import styles from './styles.module.scss';

export default function Techdesc({ data }) {
  return (
    <div className={`w-full mx-auto overflow-hidden py-20 bg-white rounded-tr-md rounded-b-md px-2 md:px-8`}>
      <div className={`zero:overflow-x-scroll md:overflow-x-auto`}>
        <table
          className={
            `w-full shadow-inner rounded-md ` +
            styles['shadow-techdesc']
          }
        >
          <thead></thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={`TABLE${index}`}
                  className={index % 2 === 0 ? `bg-belplit_2 bg-opacity-10` : 'bg-zinc-700 text-zinc-100'}
                >
                  {item.map((trItem, trIndex) => (
                    <td
                      className={
                        (trIndex === 0
                          ? 'zero:text-xs sm:text-sm md:text-base px-1 font-light'
                          : 'font-light') + ' border-b'
                      }
                      key={`TR${index}${trIndex}`}
                    >
                      {trIndex === 0
                        ? trItem
                        : trItem.map((tdItem, tdIndex) => (
                            <>
                              {trItem.length === 1 ? (
                                <td className={''} key={`TD${index}${trIndex}${tdIndex}`}>
                                  {tdItem}
                                </td>
                              ) : (
                                <td
                                  className={'px-2 border-x border-zinc-500'}
                                  key={`TD${index}${trIndex}${tdIndex}`}
                                >
                                  {tdItem}
                                </td>
                              )}
                            </>
                          ))}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
