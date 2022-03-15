import React from 'react';
import styles from './styles.module.scss';

const randomKey = () => Math.random().toString();

export default function Techdesc({ data, w }) {
  return <></>
  return (
    <div className={`w-full mx-auto overflow-hidden pt-4 pb-4 rounded-tr-md rounded-b-md px-2 md:px-8`}>
      <div className={`zero:overflow-x-scroll md:overflow-x-auto`}>
        <table className={`w-full`}>
          <thead className={`py-1 border-y border-zinc-800`}>
            <tr>
              <th
                
                scope='col'
                className={`text-left text-lg border-zinc-900 px-2`}
              >
                Показатель
              </th>
              <th scope='col' className={`text-left text-lg px-2`}>
                Значение
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={`TABLE${randomKey()}`}
                  className={
                    index % 2 === 0
                      ? `bg-zinc-100 `
                      : 'bg-belplit_dark bg-opacity-30 text-zinc-900' + ` py-0.5`
                  }
                >
                  {item.map((trItem, trIndex) => (
                    <td
                      key={`TR${randomKey()}`}
                      className={
                        trIndex === 0
                          ? 'zero:text-xs sm:text-sm md:text-base px-1 font-light border-r border-zinc-800 rounded-l '
                          : 'rounded-r zero:font-extralight sm:font-light zero:text-xs sm:text-sm md:text-base '
                      }
                    >
                      {trIndex === 0 ? (
                        <p>{trItem}</p>
                      ) : (
                        trItem.map((tdItem, tdIndex) => (
                          <React.Fragment key={`TD1${randomKey()}`}>
                            {trItem.length === 1 ? (
                              <td key={`TD1${randomKey()}`}>{tdItem}</td>
                            ) : (
                              <td
                                className={`px-0.5  border-r border-zinc-800`}
                                key={`TD2${randomKey()}`}
                              >
                                {tdItem}
                              </td>
                            )}
                          </React.Fragment>
                        ))
                      )}
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
