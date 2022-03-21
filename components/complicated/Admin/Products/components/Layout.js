import React from 'react';
import { Icons } from '../../..';

const Products = (props) => {
  const { children } = props;
  return <div className={`mx-1`}>{children && children}</div>;
};

const Specs = (props) => {
  const { productList } = props;
  return (
    <div width={'100%'} className={`text-sm`}>
      <div className={`flex justify-start bg-zinc-100 border-x border-zinc-400 items-center`}>
    
          <div className={`w-8 border-r flex-none`}>
            <Icons.Visible fill={`#1b5374`} extraClasses={`mx-auto w-5 h-5`} />
          </div>
          <div className={`w-32 h-5 pt-0.5 text-center font-bold text-xs border-r flex-none`}>
            размеры[мм]
          </div>
          <div className={`w-20 text-center font-bold text-xs border-r flex-none`}>
            тип кромки
          </div>

         
        {productList.cities.map((city, i) => {
          return (
            <div key={`sdfjksd${i}`} className={`font-bold w-32 text-xs flex-none text-center ${i !== productList.cities.length - 1 ? `border-r` : ''}`}>
              {city[0]}
            </div>
          );
        })}
       
        
      </div>
      <div>{props.children && props.children}</div>
    </div>
  );
};

const Layout = {
  Specs,
  Products,
};
export default Layout;
