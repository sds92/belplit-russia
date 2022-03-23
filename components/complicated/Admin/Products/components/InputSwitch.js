import React from 'react';
import { Icons } from '../../..';

export default function InputSwitch(props) {
  const { title, onSubmit, initValue, type } = props;
  const [state, setState] = React.useState({
    hover: false,
    edit: false,
    input: initValue || '',
  });
  return (
    <React.Fragment>
      <div className={`ml-2 text-sm font-bold cursor-default`}>{title}</div>
      {state.edit ? (
        <div className={`flex w-full px-4 gap-2`}>
          <Icons.Ok
            extraClasses={`bg-zinc-50 h-6 w-6 shadow-md border border-green-900 text-zinc-800 rounded-sm hover:scale-110 cursor-pointer transition-all duration-75`}
            onClick={() => {
              onSubmit(state.input);
              setState((s) => ({
                ...s,
                edit: false,
                hover: false,
              }));
            }}
          />
          {type === 'textarea' ? (
            <textarea
              onChange={(e) => {
                setValues((s) => ({ ...s, desc: { ...s.desc, main: e.target.value } }));
              }}
              value={state.input}
              rows={5}
            />
          ) : (
            <input
              className={`border border-sky-900 border-opacity-60 rounded-sm w-full text-sm pl-1`}
              value={state.input}
              onChange={(e) => {
                setState((s) => ({
                  ...s,
                  input: e.target.value,
                }));
              }}
            />
          )}
        </div>
      ) : (
        <div
          className={`w-max max-w-full h-6 ml-2 px-2 pt-1 relative text-sm rounded-sm cursor-default ${
            state.hover ? `bg-blue-100` : ``
          }`}
          onMouseEnter={() => {
            setState((s) => ({
              ...s,
              hover: true,
            }));
          }}
          onMouseLeave={() => {
            setState((s) => ({
              ...s,
              hover: false,
            }));
          }}
        >
          {initValue}
          {state.hover && (
            <div className={`absolute flex justify-start items-center inset-0 gap-2`}>
              <Icons.Edit
                extraClasses={`ml-2 bg-green-900 bg-opacity-80 h-6 w-6 -m-0.5 shadow-md  border-green-900 text-zinc-100 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
                onClick={() => {
                  setState((s) => ({
                    ...s,

                    edit: true,
                    hover: false,
                  }));
                }}
              />
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
}
