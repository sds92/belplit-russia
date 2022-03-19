import React from 'react';
import { Icons } from '../../..';

const Products = (props) => {
  const { children } = props;
  return <div className={`mx-1`}>{children && children}</div>;
};

const Specs = (props) => {
  const { productList } = props;
  // console.log('🚀 ~ file: Layout.js ~ line 11 ~ Specs ~ productList', productList);
  return (
    <table width={'100%'} className={`mx-auto text-sm`}>
      <thead className={`bg-zinc-100 rounded-md border-x border-zinc-400`}>
        <tr>
          <td width={40} className={`text-center border-r`}>
            <Icons.Visible fill={`#1b5374`} extraClasses={`mx-auto w-5 h-5`} />
          </td>
          <td width={100} className={`text-center font-bold text-xs border-r`}>
            размер[мм]
          </td>
          <td width={100} className={`text-center font-bold text-xs border-r`}>
            тип кромки
          </td>

         
        {productList.cities.map((city, i) => {
          return (
            <td width={50} key={`sdfjksd${i}`} className={`font-bold text-xs text-center ${i !== productList.cities.length - 1 ? `border-r` : ''}`}>
              {city[0]}
            </td>
          );
        })}
        </tr>
        
      </thead>
      <tbody>{props.children && props.children}</tbody>
    </table>
  );
};

const Layout = {
  Specs,
  Products,
};
export default Layout;
