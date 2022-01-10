import React from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

export default function ImgGrid() {
  const [hover, setHover] = React.useState(false);
  const imagesSM = [
    {
      src: '/images/examples/1.jpg',
      classNames: `main-image-container-sm md:row-span-2 rounded-md overflow-hidden shadow-md h-full relative`,
      desc: `Внутренняя изоляция перекрытий под стяжку бесшовных полов (ламинат, паркетная доска)`,
      fade: `left`,
    },
    {
      src: '/images/examples/2.jpg',
      classNames: `main-image-container-sm rounded-md overflow-hidden shadow-md  h-full relative`,
      desc: `Внутренняя изоляция стен`,
      fade: `a`,
    },
    {
      src: '/images/examples/3.jpg',
      classNames: `main-image-container-sm md:row-span-2 rounded-md overflow-hidden shadow-md h-full relative`,
      desc: `Тепло и шумоизоляция скатных кровель`,
      fade: `a`,
    },
    {
      src: '/images/examples/4.jpg',
      classNames: `main-image-container-sm rounded-md overflow-hidden shadow-md h-full relative`,
      desc: `Утепление зданий`,
      fade: `right`,
    },
    {
      src: '/images/examples/5.jpg',
      classNames: `main-image-container-sm rounded-md overflow-hidden shadow-md h-full relative`,
      desc: `Ветрозащита, утепление внешних стен`,
      fade: ``,
    },
    {
      src: '/images/examples/6.jpg',
      classNames: `main-image-container-sm rounded-md overflow-hidden shadow-md h-full relative`,
      desc: `Звукоизоляция потолка`,
      fade: `right`,
    },
  ];
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 mx-4 gap-4 mt-5 main-image-container-lg`}>
      {imagesSM.map((item, index) => (
        <Fade key={`GRIDIMG${index}`} right={item.fade === 'right'} left={item.fade === 'left'}>
          <div
            key={`GRIDIMG${index}`}
            className={item.classNames}
            onMouseEnter={() => setHover({ [index]: true })}
            onMouseLeave={() => setHover({ [index]: false })}
          >
            <Image src={`${item.src}`} alt={`Белтермо пример ${index}`} layout='fill' objectFit='cover' />

            <div
              className={`absolute rounded-md flex flex-col justify-center inset-0 hover:bg-slate-900 hover:bg-opacity-60 transition-all`}
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
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
}
