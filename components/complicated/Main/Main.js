import React from 'react';
import ImageViewer from 'react-simple-image-viewer';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import MainImg from '../../../public/images/main.jpg';
import { Text } from '../../lib';
import { app } from '../../../configs/app';
const itemData = [
  {
    img: '/images/examples/1.jpg',
    title: 'Bed',
  },
  {
    img: '/images/examples/2.jpg',
    title: 'Books',
  },
  {
    img: '/images/examples/4.jpg',
    title: 'Sink',
  },
  {
    img: '/images/examples/3.jpg',
    title: 'Kitchen',
  },
  {
    img: '/images/examples/5.jpg',
    title: 'Blinds',
  },
  {
    img: '/images/examples/6.jpg',
    title: 'Chairs',
  },
];

export default function Main() {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);
  const imagesSM = [
    '/images/examples/1.jpg',
    '/images/examples/2.jpg',
    '/images/examples/3.jpg',
    '/images/examples/4.jpg',
    '/images/examples/5.jpg',
    '/images/examples/6.jpg',
  ];
  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className={`flex flex-col overflow-hidden`}>
      <div className={`relative w-full h-full overflow-hidden`}>
        <Text ts={'2xl'} extraClasses={'absolute'}>
          {app.pages.main.title}
        </Text>
        <img style={{ overflow: 'hidden', width: '100%' }} src={'/images/main.jpg'} alt={''} />
      </div>
      <div className={`mx-20`}>
        <Text ta={'center'} ts={'2xl'}>
          МДВП БЕЛТЕРМО
        </Text>
        <Text ta={'justify'}>
          Белтермо - это мягкие древесно-волокнистые плиты на 94% состоящие из древесины хвойных пород
          Предназначен для создания эффективной ветрозащиты и экологически чистой звуко/теплоизоляции дома.
          ЗАЩИЩАЕТ ОТ ВЕТРА ЗАЩИЩАЕТ ОТ ЖАРЫ ЗАЩИШАЕТ ОТ ХОЛОДА СОЗДАЕТ КОМФОРТНЫЙ МИКРОКЛИМАТ ЗНАЧИТЕЛЬНО
          СНИЖАЕТ ПРОНИКНОВЕНИЕ ШУМА ЭКОЛОГИЧНОСТЬ ОБЕСПЕЧИВАЕТ ПОЖАРНУЮ БЕЗОПАСНОСТЬ ЛЕГКО МОНТИРУЕТСЯ В
          доме, с применением материала БЕЛТЕРМО – стены «дышат», мансарда не перегревается, нет сквозняков, а
          комнаты изолированы от шума. БЕЛТЕРМО – это материал для всех, кто заботится о здоровье и хочет жить
          с комфортом!
        </Text>
      </div>
      <div className={`flex flex-wrap justify-center items-center mx-20`}>
        <div className={`w-1/2 md:w-1/4 sm:p-2 p-0.5`}>
          <img
            src={`${imagesSM[0]}?w=248&fit=crop&auto=format`}
            srcSet={`${imagesSM[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={''}
            loading='lazy'
          />
        </div>
        <div className={`w-1/2 md:w-1/4 sm:p-2 md:py-0 md:px-2`}>
          <div className={`flex flex-col gap-1 sm:gap-2 md:gap-4 sm:py-2`}>
            <img
              src={`${imagesSM[1]}?w=248&fit=crop&auto=format`}
              srcSet={`${imagesSM[1]}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={''}
              loading='lazy'
            />
            <img
              src={`${imagesSM[3]}?w=248&fit=crop&auto=format`}
              srcSet={`${imagesSM[3]}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={''}
              loading='lazy'
            />
          </div>
        </div>
        <div className={`w-1/2 md:w-1/4 sm:p-2 order-last`}>
          <div className={`flex flex-col gap-1 sm:gap-2 md:gap-4 sm:py-2`}>
            <img
              src={`${imagesSM[4]}?w=248&fit=crop&auto=format`}
              srcSet={`${imagesSM[4]}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={''}
              loading='lazy'
            />
            <img
              src={`${imagesSM[5]}?w=248&fit=crop&auto=format`}
              srcSet={`${imagesSM[5]}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={''}
              loading='lazy'
            />
          </div>
        </div>
        <div className={`w-1/2 md:w-1/4 sm:p-2 p-0.5`}>
          <img
            src={`${imagesSM[2]}?w=248&fit=crop&auto=format`}
            srcSet={`${imagesSM[2]}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={''}
            loading='lazy'
          />
        </div>
      </div>
      <div className={`flex flex-col mx-20`}>
        <Text ta={'center'} ts={'2xl'}>
          Преимущества БЕЛТЕРМО
        </Text>
        <Text>Простота монтажа</Text>
        <Text>
          Удобный формат плит (прямая кромка/шип-паз/ступень) и экологичность материала позволяют производить
          монтаж вручную без использования защитных средств. Плиты плотно стыкуются и при необходимости легко
          нарезаются до нужного размера.
        </Text>
        <Text>Защита от ветра</Text>
        <Text>
          Высокое сопротивление продуванию потокам воздуха (50 - 100 (кПа*с)/м³) обеспечивает надёжную защиту
          от ветра.
        </Text>
        <Text>Отличная звукоизоляция</Text>
        <Text>
          Высокая плотность (110-200 кг/м³) и однородность защищают от ударного шума внутри дома (Rw=23-27
          Дб), а высокая пористость позволяет поглощать шум снаружи (άw=0,60-0,95).
        </Text>
        <Text>Пожарная безопасность</Text>
        <Text>
          Инертность горения посредством обугливания не распространяет огонь (огнестойкость "E" (еврокласс по
          EN 13501-1).
        </Text>
        <Text>Комфортный микроклимат</Text>
        <Text>
          Способность поглощать и отдавать атмосферную влагу (Sd=0,06-0,72 м) позволяет плитам «дышать», не
          теряя при этом своих технических характеристик, обеспечивая оптимальную влажность и предотвращая
          образование плесени или грибка на стенах и потолке.
        </Text>
        <Text>Защита от холода</Text>
        <Text>
          Низкая теплопроводность (λD= 0,038-0,041 Вт/м*К) не позволяет теплу выходить наружу, а холоду -
          проникать внутрь.
        </Text>
        <Text>Защита от жары</Text>
        <Text>
          Благодаря высокому значению теплоемкости (с=2100 Дж/(кг*К) в доме будет прохладно даже в жаркие дни,
          что позволяет сэкономить на использовании кондиционера.
        </Text>
        <Text>Экологичность</Text>
        <Text>
          Наличие в составе только натуральной древесины (сосны) и экологически чистых связующих компонентов
          (смолы на полиуретановой основе MDI 4%) обеспечивает абсолютную безопасность для человека и
          окружающей среды.
        </Text>
      </div>
    </div>
  );
}
