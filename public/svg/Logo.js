import * as React from "react";

function Logo(props) {
  return (
    <svg
      width={100}
      height={100}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <path
        d="M0 9.09v81.82C0 93.94 6.25 100 9.37 100h81.26c3.12 0 9.37-6.06 9.37-9.09V9.09C100 6.06 93.75 0 90.63 0H9.37C6.25 0 0 6.06 0 9.09zm73.06 63c-17.3 8.05-44.41 10.15-56.81-3.03-.63-.67-5.68-11.37-6.25-12.12.8-.21 2.07-.82 3.12 0 2.44 1.89 4.95 9.49 6.25 9.09 10.4-3.16 9.55-15.45 30.39-11.11C62.02 57.47 75 68.4 90.63 65.37c-5.03 10.05-10.77 14.82-21.01 21-13.4 8.09-38.15 5.34-47.12-8.22 7.12 1.22 6.12 4.22 25.12 4.22 6.13 0 32-7 25.44-10.28zM27.57 27.9c17.29-8.04 44.4-10.15 56.8 3.04.63.67 5.69 11.37 6.26 12.12-.81.21-2.07.82-3.13 0-2.43-1.89-4.95-9.49-6.25-9.09-10.39 3.16-9.54 15.45-30.39 11.11C38.6 42.53 25.63 31.6 10 34.63c5.02-10.05 10.76-14.82 21-21 13.41-8.09 38.16-5.34 47.12 8.21C71 20.63 72 17.63 53 17.63c-6.13 0-32 7-25.43 10.27z"
        fill="#55b025"
      />
    </svg>
  );
}

const MemoLogo = React.memo(Logo);
export default MemoLogo;
