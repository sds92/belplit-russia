import React from 'react';

export default function Button({ href, children, className, ...props }) {
  return (
    <div
      className={`
        cursor-pointer 
        
        py-1.5  
        antialiased 
        ${className}
        `}
      {...props}
    >
      <a className={``} href={href}>
        <div
          className={`flex items-center justify-center antialiased`}
          style={{
            transform: 'translateZ(0)',

            backfaceVisibility: 'hidden',
          }}
        >
          {children && children}
        </div>
      </a>
    </div>
  );
}
