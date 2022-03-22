import React from 'react';

const randomKey = () => Math.random().toString();

export default function Techdesc({ data, w }) {
  return (
    <div className={`w-full mx-auto overflow-hidden pt-4 pb-4 rounded-tr-md rounded-b-md px-2 md:px-8`}>
      <div className={`zero:overflow-x-scroll md:overflow-x-auto`}>
        <table className={`w-full`}>
          <thead className={`py-1 border-y border-zinc-800`}>
            <tr>
              <th scope='col' className={`text-left text-lg border-zinc-900 px-2`}>
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
                  <td>
                    <p className={`font-light`}>{item.title}</p>
                  </td>
                  <td>
                    <p className={`font-light`}>
                      {item.value.map((tdItem, tdIndex) => (
                        <React.Fragment key={`TD1${randomKey()}`}>
                          {item.value.length - 1 === tdIndex ? (
                            <td>{tdItem}</td>
                          ) : (
                            <td className={`px-0.5  border-r border-zinc-800`}>{tdItem}</td>
                          )}
                        </React.Fragment>
                      ))}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
