import { ClassNames } from '@emotion/react';
import React from 'react';

export default function ColorBelplit({ children, classNames, ...props }) {
  return (
    <div className={`bg-zinc-400 overflow-hidden ` + classNames} {...props}>
      <div className={`bg-belplit bg-opacity-60`}>
          {children && children}
      </div>
    </div>
  );
}
