import React from 'react';
import styles from './styles.module.scss';

export default function Techdesc({ data }) {
  return (
    <div className={`w-full mx-auto overflow-hidden pt-4 rounded-tr-md rounded-b-md px-2 md:px-8`}>
      <div className={`zero:overflow-x-scroll md:overflow-x-auto`}>
        <table className={`w-full` }>
          <thead>
            <tr >
              <th scope='col' className={`text-left text-lg border-r border-zinc-900 px-2`}>Показатель</th>
              <th scope='col' className={`text-left text-lg px-2`}>Значение</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={`TABLE${index}`}
                  className={index % 2 === 0 ? `bg-zinc-300` : 'bg-belplit_dark bg-opacity-90 text-zinc-100'}
                >
                  {item.map((trItem, trIndex) => (
                    <td
                      className={
                        (trIndex === 0
                          ? 'zero:text-xs sm:text-sm md:text-base px-1 font-light border-r border-zinc-700 rounded-l'
                          : 'font-light rounded-r ') + ' '
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
                                  className={`${tdIndex % 2 && trItem.length > 4 ? 'bg-belplit_2 bg-opacity-50' : 'bg-opacity-100'} px-2`}
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
