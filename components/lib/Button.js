import React from 'react';

export default function Button({ href, children, className, ...props }) {
  
  return (
    <div className={`button button-winona border-0 hover:bg-belplit24 py-1.5 shadow-2xl ${className}`} {...props}>
      <a className={``} href={href}>
        <div className={`flex items-center justify-center`}>{children && children}</div>
      </a>
    </div>
  );
}
