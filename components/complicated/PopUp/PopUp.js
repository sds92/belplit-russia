import React from 'react';
import { Icons } from '../../complicated';

export default function PopUp(props) {
  const { data } = props;
  const [show, setShow] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  return (
    <div>
      {data &&
        data.map(
          (item, index) =>
            item[0] && (
              <React.Fragment key={`POPUP${index}`}>
                <div
                  className={`flex justify-between relative rounded-md overflow-hidden h-10 my-1 shadow-md bg-slate-100 cursor-pointer`}
                  onClick={() => setShow({ [index]: !show[index] })}
                >
                  <span className={`hover:bg-belplit active:bg-belplit active:bg-opacity-40 hover:bg-opacity-40 w-full text-lg py-2 pl-4 font-bold`}>
                    {item[1]}
                  </span>
                  <Icons.Plus
                    extraClasses={`${
                      show[index] ? `opacity-0` : `opacity-100`
                    } absolute bg-belplit right-0 w-10 h-10 text-white`}
                    
                  />
                  <Icons.Minus
                    extraClasses={`${
                      show[index] ? `opacity-100` : `opacity-0`
                    } absolute bg-belplit right-0 w-10 h-10 text-white`}
                  />
                </div>
                <div
                  className={`${!show[index] ? 'max-h-0' : 'max-h-user'} ml-2 overflow-hidden transition-all`}
                >
                  {item[0]?.map((item, inner_index) => (
                    <p
                      className={`indent-0 cursor-default flex hover:text-belplit border-b py-1 font-light`}
                      key={Math.random().toString(36)}
                      onMouseEnter={() => setHover({ [inner_index]: true })}
                      onMouseLeave={() => setHover({ [inner_index]: false })}
                    >
                      <span
                        className={`transition-all font-bold overflow-hidden text-belplit ${
                          !hover[inner_index] ? 'w-1 opacity-0' : 'w-3 opacity-100'
                        }`}
                      >
                        {'>'}
                      </span>
                      &nbsp;
                      {`${item}`}
                    </p>
                  ))}
                </div>
              </React.Fragment>
            )
        )}
    </div>
  );
}
