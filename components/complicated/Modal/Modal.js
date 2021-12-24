import React from 'react';

export default function Modal(props) {
  const { children } = props;
  return (
    <div className={`fixed flex justify-center items-center w-screen h-screen bg-slate-500 bg-opacity-40`}>
      <div className={`relative bg-slate-100 p-2`}>{children && children}</div>
    </div>
  );
}
