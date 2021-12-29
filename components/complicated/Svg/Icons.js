import { SVGImage } from './Svg';
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

const Icons = {
  ChevronUp,
  ChevronDown,
  Menu,
  Close,
};

export default Icons;
