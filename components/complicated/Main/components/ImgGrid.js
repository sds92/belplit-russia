import React from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { Text } from '../../../lib';
import { InfoSwitcher } from '.';

export default function ImgGrid(props) {
  const { title, link } = props;
  const classes = {
    imgLg: `object-fill min-h-full min-w-full`,
    imgSm: `object-fill min-h-full min-w-full`,
    gridItemLg: `row-span-2 rounded-md overflow-hidden shadow-md relative`,
    gridItemSm: `rounded-md overflow-hidden shadow-md relative`,
  };
  const [hover, setHover] = React.useState(false);
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
    {
      src: '/images/examples/8.jpg',
      gridClasses: classes.gridItemSm,
      imgClasses: classes.imgSm,
      desc: `Звукоизоляция потолка`,
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
    <div className={`relative mb-20`}>
      {/* <Text className={`absolute z-10 right-0 top-0 text-5xl font-bold py-2 text-zinc-800 text-right`}>
        {title}
      </Text> */}
      <div
        className={`relative h-full mx-auto overflow-hidden rounded-md z-1`}
        style={{
          height: 600,
          width: 'calc(100%*1.6)',
        }}
      >
        <div
          className={`absolute grid grid-cols-6 gap-4 main-page-carousel`}
          style={{
            height: 600,
          }}
        >
          {imagesSM.map((item, index) => (
            <div
              key={`GRIDIMG${index}`}
              className={`${item.gridClasses}`}
              onMouseEnter={() => setHover({ [index]: true })}
              onMouseLeave={() => setHover({ [index]: false })}
            >
              <img src={`${item.src}`} alt={`Белтермо пример ${index}`} className={item.imgClasses} />
              <div className={`w-full h-full inset-0 absolute bg-black opacity-10`}></div>
              {/* <div
                className={`rounded-md flex flex-col justify-center inset-0 hover:bg-slate-900 hover:bg-opacity-60 transition-all`}
              >
                <div
                  className={`zero:hidden sm:block absolute inset-0 m-4 box-content rounded-md ${
                    hover[index] ? 'border border-slate-100' : ''
                  }`}
                ></div>
                <p
                  className={`zero:hidden sm:block cursor-default ${
                    hover[index] ? 'scale-100' : 'scale-0'
                  } text-center text-slate-100 md:text-xl font-light p-8 transition-all`}
                >
                  {item.desc}
                </p>
                <p
                  className={`zero:flex justify-center items-center align-middle sm:hidden absolute inset-0 cursor-default text-sm text-center text-slate-100 font-light bg-slate-900 bg-opacity-60`}
                >
                  {item.desc}
                </p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
