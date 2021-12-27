import React from 'react';

export default function Modal(props) {
  const { children } = props;
  console.log("🚀 ~ file: Modal.js ~ line 5 ~ Modal ~ props", props)
  return (
    <div className={`fixed flex justify-center items-center w-screen h-screen bg-slate-500 bg-opacity-40 z-50`}>
      <div className={`relative bg-slate-100 p-2 rounded-md`}>{children && children}</div>
    </div>
  );
}
