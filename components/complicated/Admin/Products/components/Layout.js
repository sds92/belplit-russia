import React from 'react';

export default function Layout(props) {
  return (
    <table width={'90%'} className={`mx-auto`}>
      <thead className={`bg-zinc-100 rounded-md`}>
        <tr>
          <td width={100} className={`text-center`}>
            показывать
          </td>
          <td width={100} className={`text-center`}>
            размер[мм]
          </td>
          <td width={100} className={`text-center`}>
            тип кромки
          </td>
          <td width={100} className={`text-center`}>
            текущая цена
          </td>
          <td width={100} className={`text-center`}>
            новая цена
          </td>
          <td width={100} className={``}>
            <div
            //   onClick={() => props.save()}
              className={`bg-belplit_2 self-center text-center whitespace-nowrap m-1 px-2 py-1 rounded-md shadow-md hover:bg-belplit_dark hover:text-zinc-100 cursor-pointer `}
            >
              Обновить цены
            </div>
          </td>
          <td className={``}></td>
        </tr>
      </thead>
      <tbody>{props.children && props.children}</tbody>
    </table>
  );
}
