import React from 'react';

export default function Navigation(props) {
  const { handleSave } = props;
  return (
    <div className={`fixed w-full bottom-3 flex items-center justify-center`}>
      <div className={`bg-zinc-600`}>
        <div
          className={`cursor-pointer z-50 bottom-2 left-2 bg-belplit_2 text-white text-sm font-light rounded-sm px-2 py-1 animate-pulse`}
          onClick={handleSave}
        >
          сохранить
        </div>
      </div>
    </div>
  );
}
