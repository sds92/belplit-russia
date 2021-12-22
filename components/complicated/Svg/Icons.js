import { SVGImage } from './Svg';
export const ChevronDown = ({ w = 6, h = 6, ...props }) => {
  return (
    <SVGImage
      viewBox='0 0 24 24'
      w={w}
      h={h}
      fill='none'
      stroke={props.stroke || 'currentColor'}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />;
    </SVGImage>
  );
};

const Icons = {
  ChevronDown,
};

export default Icons;
