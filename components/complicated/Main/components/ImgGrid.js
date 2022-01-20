import React from 'react';
import Link from 'next/link';
import useInterval from '../../../../utils/hooks/useInterval';
import { Text } from '../../../lib';
import { InfoSwitcher } from '.';

export default function ImgGrid(props) {
  const { links } = props;
  const [state, setState] = React.useState({
    class: 'left-0',
    left: 0,
    duration: 30,
    px: 0,
    wEl: 1000,
    delay: 30000,
  });
  const classes = {
    imgLg: `object-fill min-h-full min-w-full`,
    imgSm: `object-fill min-h-full min-w-full`,
    gridItemLg: `row-span-2 rounded-md overflow-hidden shadow-md relative`,
    gridItemSm: `rounded-md overflow-hidden shadow-md relative`,
  };
  const ref = React.useRef();

  useInterval(() => {
    if (state.px !== 0) {
      setState((s) => ({ ...s, px: 0 }));
    } else {
      setState((s) => ({ ...s, px: window.innerWidth - ref.current.offsetWidth }));
    }
  }, state.delay);

  React.useEffect(() => {
    setState((s) => ({
      ...s,
      px: window.innerWidth - ref.current.offsetWidth,
      delay: (ref.current.offsetWidth - window.innerWidth) * 20,
    }));
    const action = () => {
      setState((s) => ({
        ...s,
        px: window.innerWidth - ref.current.offsetWidth,
        delay: (ref.current.offsetWidth - window.innerWidth) * 20,
      }));
    };
    window.addEventListener('resize', action);
    return () => window.removeEventListener('resize', action);
  }, []);

  const imagesSM = [
    {
      src: '/images/examples/2.jpg',
      gridClasses: classes.gridItemSm,
      imgClasses: classes.imgSm,
      desc: `Внутренняя изоляция стен`,
    },
    {
      src: '/images/examples/3.jpg',
      gridClasses: classes.gridItemLg,
      imgClasses: classes.imgLg,
      desc: `Тепло и шумоизоляция скатных кровель`,
    },
    {
      src: '/images/examples/4.jpg',
      gridClasses: classes.gridItemSm,
      imgClasses: classes.imgSm,
      desc: `Утепление зданий`,
    },
    {
      src: '/images/examples/1.jpg',
      gridClasses: classes.gridItemLg,
      imgClasses: classes.imgLg,
      desc: `Внутренняя изоляция перекрытий под стяжку бесшовных полов (ламинат, паркетная доска)`,
    },
    {
      src: '/images/examples/5.jpg',
      gridClasses: classes.gridItemSm,
      imgClasses: classes.imgSm,
      desc: `Ветрозащита, утепление внешних стен`,
    },
    {
      src: '/images/examples/6.jpg',
      gridClasses: classes.gridItemSm,
      imgClasses: classes.imgSm,
      desc: `Звукоизоляция потолка`,
    },
    {
      src: '/images/examples/7.jpg',
      gridClasses: classes.gridItemSm,
      imgClasses: classes.imgSm,
      desc: `Звукоизоляция потолка`,
    },
    {
      src: '/images/examples/8.jpg',
      gridClasses: classes.gridItemSm,
      imgClasses: classes.imgSm,
      desc: `Звукоизоляция потолка`,
    },
    {
      src: '/images/examples/9.jpg',
      gridClasses: classes.gridItemSm,
      imgClasses: classes.imgSm,
      desc: `Звукоизоляция потолка`,
    },
    {
      src: '/images/examples/10.jpg',
      gridClasses: classes.gridItemSm,
      imgClasses: classes.imgSm,
      desc: `Звукоизоляция потолка`,
    },
  ];
  return (
    <div className={`relative my-4 flex flex-col items-center`}>
      <div
        className={`relative justify-center overflow-hidden zero:h-48 md:h-96`}
        style={{
          width: '100%',
        }}
      >
        <div
          ref={ref}
          className={`absolute flex gap-4 h-full`}
          style={{
            marginLeft: `${state.px}px`,
            // left: state.left,
            transitionDuration: `${state.delay}ms`,
            transitionProperty: 'all',
            transitionTimingFunction: 'linear',
          }}
        >
          {imagesSM.map((item, index) => (
            <div
              key={`GRIDIMG${index}`}
              className={`zero:w-48 md:w-64 rounded-md overflow-hidden shadow-md relative`}
              style={{
                background: `no-repeat url(${item.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className={`w-full h-full inset-0 absolute bg-black opacity-20`}></div>
            </div>
          ))}
        </div>
      </div>
      <div className={`sm:hidden w-full mt-4 h-12 flex items-center justify-center`}>
        <Link href={links[0][0]} passHref>
          <div className={`mx-auto rounded-md bg-zinc-400 w-52 flex items-center justify-center hover:scale-105 active:scale-105 `}>
            <div
              className={`bg-belplit bg-opacity-60 w-52 cursor-pointer text-center whitespace-nowrap text-lg font-bold uppercase text-white rounded-md py-2 px-8 shadow-md`}
            >
              {links[0][1]}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
