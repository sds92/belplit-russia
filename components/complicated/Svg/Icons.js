import { SVGImage } from './Svg';
export const Whatsapp = ({ w = 1, h = 1, ...props }) => {
  return (
    <SVGImage viewBox='0 0 128 128' width={`${w}rem`} height={`${h}rem`} {...props}>
      <g clipRule='evenodd'>
        <path fill='none' d='M0 0h128v128H0z' />
        <path
          d='M46.114 32.509c-1.241-2.972-2.182-3.085-4.062-3.161a36.272 36.272 0 00-2.144-.074c-2.446 0-5.003.715-6.546 2.295-1.88 1.919-6.545 6.396-6.545 15.576 0 9.181 6.695 18.06 7.598 19.303.941 1.24 13.053 20.354 31.86 28.144 14.707 6.095 19.071 5.53 22.418 4.816 4.89-1.053 11.021-4.667 12.564-9.03 1.542-4.365 1.542-8.09 1.09-8.88-.451-.79-1.693-1.24-3.573-2.182-1.88-.941-11.021-5.456-12.751-6.058-1.693-.639-3.31-.413-4.588 1.393-1.806 2.521-3.573 5.08-5.003 6.622-1.128 1.204-2.972 1.355-4.514.715-2.069-.864-7.861-2.898-15.008-9.256-5.53-4.928-9.291-11.06-10.381-12.904-1.091-1.881-.113-2.973.752-3.988.941-1.167 1.843-1.994 2.783-3.086.941-1.091 1.467-1.655 2.069-2.935.64-1.241.188-2.521-.263-3.462-.452-.943-4.213-10.124-5.756-13.848zM63.981 0C28.699 0 0 28.707 0 63.999c0 13.996 4.514 26.977 12.187 37.512L4.212 125.29l24.6-7.862C38.93 124.125 51.004 128 64.019 128 99.301 128 128 99.291 128 64.001 128 28.709 99.301.002 64.019.002h-.037V0z'
          fill='#67C15E'
          fillRule='evenodd'
        />
      </g>
    </SVGImage>
  );
};

export const Telegram = ({ w = 1, h = 1, ...props }) => {
  return (
    <SVGImage data-name='Layer 1' viewBox='0 0 512 512' width={`${w}rem`} height={`${h}rem`} {...props}>
      <defs>
        <linearGradient gradientUnits='userSpaceOnUse' id='cs_a1' x2={502.697} y1={512} y2={9.303}>
          <stop offset={0} stopColor='#2081c7' />
          <stop offset={1} stopColor='#38afe2' />
        </linearGradient>
      </defs>
      <path
        d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm133.1 161.9L343.6 379a16 16 0 01-25.2 9.6l-66.1-48.9-40.1 37.8a5.4 5.4 0 01-7.7-.3l-.9-.9 7-67.4 125.5-114.6a3.4 3.4 0 00-4.1-5.3L171.5 290.5l-69.1-23.2a9.4 9.4 0 01-.3-17.7l270.4-101.9a12.4 12.4 0 0116.6 14.2z'
        fill='url(#cs_a1)'
      />
    </SVGImage>
  );
};
export const ChevronDown = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      viewBox='0 0 24 24'
      fill='none'
      stroke={props.stroke || 'currentColor'}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />;
    </SVGImage>
  );
};
export const Menu = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      viewBox='0 0 24 24'
      fill='none'
      stroke={props.stroke || 'currentColor'}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
    </SVGImage>
  );
};

export const Close = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
    </SVGImage>
  );
};

export const ChevronUp = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
    </SVGImage>
  );
};

export const Location = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill={props.fill || 'currentColor'}
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
        clipRule='evenodd'
      />
    </SVGImage>
  );
};

export const Phone = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill={props.fill || 'currentColor'}
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
      <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
    </SVGImage>
  );
};

export const Mail = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill={props.fill || 'currentColor'}
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </SVGImage>
  );
};
export const Plus = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
    </SVGImage>
  );
};
export const Minus = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </SVGImage>
  );
};
export const Clock = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke={props.stroke || 'currentColor'}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />

    </SVGImage>
  );
};


const Icons = {
  Telegram,
  Whatsapp,
  Clock,
  Minus,
  Plus,
  Mail,
  Phone,
  ChevronUp,
  ChevronDown,
  Menu,
  Close,
  Location,
};

export default Icons;
