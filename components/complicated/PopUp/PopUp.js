import React from 'react';
import { Icons } from '../../complicated';

export default function PopUp(props) {
  const { data } = props;
  const [show, setShow] = React.useState({1: true});
  const [hover, setHover] = React.useState(false);
  return (
    data &&
    data.map(
      (item, index) =>
        item[0] && (
          <React.Fragment key={`POPUP${index}`}>
            <div
              className={`relative flex w-full cursor-pointer my-1 zero:mx-1`}
              onClick={() => setShow({ [index]: !show[index] })}
            >
              <Icons.ChevronDown
                extraClasses={`${
                  show[index] ? `rotate-0` : `-rotate-90`
                } bg-zinc-700 left-0 w-10 h-9 text-white rounded-md transition-all active:scale-105 hover:scale-105`}
              />
              <div
                className={`${
                  show[index] === true ? `bg-bp_3 text-white bg-opacity-90` : `text-zinc-900 hover:bg-opacity-30 hover:bg-bp_3`
                }  mx-3 w-full h-9 text-xl flex justify-between relative items-center rounded-md overflow-hidden cursor-pointer pl-2 transition-all`}
              >
                {item[1]}
              </div>
            </div>

            <div className={`${!show[index] ? 'max-h-0' : 'max-h-user'} ml-2 overflow-hidden transition-all`}>
              {item[0]?.map((item, inner_index) => (
                <p
                  className={`indent-0 cursor-default flex hover:text-belplit border-b py-1 mb-2 font-light`}
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
    )
  );
}
