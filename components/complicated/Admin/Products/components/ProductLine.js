import React from 'react';
import { Specs } from './';
import { Icons } from '../../..';

export default function ProductLine(props) {
  const { product, children, productList, handleSettingsOpenState, settings } = props;
  const [state, setState] = React.useState({
    open: {
      specs: true,
    },
  });
  return (
    <React.Fragment>
      
        <div className={`bg-zinc-400 border border-zinc-400 text-zinc-900 font-semibold`}>
          <div className={`flex justify-start items-center`}>
            <Icons.Settings
              extraClasses={`${
                settings ? `bg-sky-900 bg-opacity-90 border text-white` : `bg-zinc-50`
              }  mx-2 my-2 h-6 w-6 shadow-md text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-300`}
              onClick={() => {
                handleSettingsOpenState()
              }}
            />
            <Icons.ChevronDown
              extraClasses={`${
                state.open.specs
                  ? `bg-sky-900 bg-opacity-90 border text-white rotate-0`
                  : `bg-zinc-50 -rotate-90`
              }  mr-2 ml-1 my-2 h-6 w-6 shadow-md text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-300`}
              onClick={() => {
                setState((s) => ({ ...s, open: { ...s.open, specs: !state.open.specs } }));
              }}
            />
            <p className={`ml-1 text-xl cursor-default`}>{product.info?.title}</p>
          </div>
        </div>
      
      {children && children}
      {state.open.specs && <Specs product={product} productList={productList}/>}
    </React.Fragment>
  );
}
