// react
import React from 'react';

// etc
import { Text } from '../../lib';
import { app } from '../../../configs/app';

export default function Main() {
  const imagesSM = [
    '/images/examples/1.jpg',
    '/images/examples/2.jpg',
    '/images/examples/3.jpg',
    '/images/examples/4.jpg',
    '/images/examples/5.jpg',
    '/images/examples/6.jpg',
  ];

  return (
    <div className={`flex flex-col overflow-hidden`}>
      <div className={`relative w-full h-full overflow-hidden`}>
        <div className={`absolute`}>
          <p
            className={`font-bold 
            text-3xl sm:text-6xl md:text-8xl
            ml-10 mt-10 sm:ml-16 sm:mt-16 md:ml-20 md:mt-20`}
            style={{ color: '#38a000' }}
          >
            БЕЛТЕРМО
          </p>
          <p
            className={`
            leading-none sm:leading-none md:leading-none lg:leading-none  
            text-sm sm:text-xl md:text-3xl
            text-slate-100 
            font-bold 
            ml-16 sm:ml-20 md:ml-28 
            max-w-md
            `}
          >
            Экологичный утеплитель и <br />
            звукоизоляция
          </p>
          <p
            className={`
            leading-none sm:leading-none md:leading-none 
            text-xs sm:text-md md:text-base lg:text-lg 
            text-slate-100 
            font-light md:font-normal
            ml-16 sm:ml-20 md:ml-28 
            max-w-md
            `}
          >
            для всех типов домов
          </p>
        </div>

        <img style={{ overflow: 'hidden', width: '100%' }} src={'/images/main.jpg'} alt={''} />
      </div>
      <div className={`mx-20 my-4 rounded-md shadow-md p-10`} style={{ backgroundColor: '#38a000' }}>
        <div className={`rounded-md bg-slate-100 p-4`}>
          <Text tw={'bold'} ta={'center'} ts={'2xl'} py={`2`}>
            МДВП БЕЛТЕРМО
          </Text>
          <p className={'text-justify font-light'}>
            <span className={'font-bold'}>БЕЛТЕРМО</span> - это мягкие древесно-волокнистые плиты на{' '}
            <span className={'font-bold'}>94%</span> состоящие из древесины хвойных пород. Предназначен для
            создания эффективной ветрозащиты и экологически чистой звуко/теплоизоляции дома.
            <br />
            <span className={'font-bold'}>
              ЗАЩИЩАЕТ ОТ ВЕТРА, ЗАЩИЩАЕТ ОТ ЖАРЫ, ЗАЩИШАЕТ ОТ ХОЛОДА, СОЗДАЕТ КОМФОРТНЫЙ МИКРОКЛИМАТ,
              ЗНАЧИТЕЛЬНО СНИЖАЕТ ПРОНИКНОВЕНИЕ ШУМА, ЭКОЛОГИЧНОСТЬ, ОБЕСПЕЧИВАЕТ ПОЖАРНУЮ БЕЗОПАСНОСТЬ, ЛЕГКО
              МОНТИРУЕТСЯ В ДОМЕ
            </span>
            , с применением материала БЕЛТЕРМО – стены «дышат», мансарда не перегревается, нет сквозняков, а
            комнаты изолированы от шума. БЕЛТЕРМО – это материал для всех, кто заботится о здоровье и хочет
            жить с комфортом!
          </p>{' '}
        </div>
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
        <div className={`my-4 rounded-md shadow-md p-10`} style={{ backgroundColor: '#38a000' }}>
          <div className={`rounded-md bg-slate-100 p-4`}>
            <p className={`font-bold text-center text-2xl`}>
              Преимущества <span style={{ color: '#38a000' }}>БЕЛТЕРМО</span>
            </p>
            <p className={`font-bold text-lg`}>Простота монтажа</p>
            <p className={`font-light text-md leading-tight ml-2`} >
              Удобный формат плит (прямая кромка/шип-паз/ступень) и экологичность материала позволяют
              производить монтаж вручную без использования защитных средств. Плиты плотно стыкуются и при
              необходимости легко нарезаются до нужного размера.
            </p>
            <div style={{ backgroundColor: '#38a000', height: '1px' }} />
            <p className={`font-bold text-lg`}>Защита от ветра</p>
            <p className={`font-light text-md leading-tight ml-2`} >
              Высокое сопротивление продуванию потокам воздуха (50 - 100 (кПа*с)/м³) обеспечивает надёжную
              защиту от ветра.
            </p>
            <div style={{ backgroundColor: '#38a000', height: '1px' }} />
            <p className={`font-bold text-lg`}>Отличная звукоизоляция</p>
            <p className={`font-light text-md leading-tight ml-2`} >
              Высокая плотность (110-200 кг/м³) и однородность защищают от ударного шума внутри дома (Rw=23-27
              Дб), а высокая пористость позволяет поглощать шум снаружи (άw=0,60-0,95).
            </p>
            <div style={{ backgroundColor: '#38a000', height: '1px' }} />
            <p className={`font-bold text-lg`}>Пожарная безопасность</p>
            <p className={`font-light text-md leading-tight ml-2`} >
              Инертность горения посредством обугливания не распространяет огонь (огнестойкость "E" (еврокласс
              по EN 13501-1).
            </p>
            <div style={{ backgroundColor: '#38a000', height: '1px' }} />
            <p className={`font-bold text-lg`}>Комфортный микроклимат</p>
            <p className={`font-light text-md leading-tight ml-2`} >
              Способность поглощать и отдавать атмосферную влагу (Sd=0,06-0,72 м) позволяет плитам «дышать»,
              не теряя при этом своих технических характеристик, обеспечивая оптимальную влажность и
              предотвращая образование плесени или грибка на стенах и потолке.
            </p>
            <div style={{ backgroundColor: '#38a000', height: '1px' }} />
            <p className={`font-bold text-lg`}>Защита от холода</p>
            <p className={`font-light text-md leading-tight ml-2`} >
              Низкая теплопроводность (λD= 0,038-0,041 Вт/м*К) не позволяет теплу выходить наружу, а холоду -
              проникать внутрь.
            </p>
            <div style={{ backgroundColor: '#38a000', height: '1px' }} />
            <p className={`font-bold text-lg`}>Защита от жары</p>
            <p className={`font-light text-md leading-tight ml-2`} >
              Благодаря высокому значению теплоемкости (с=2100 Дж/(кг*К) в доме будет прохладно даже в жаркие
              дни, что позволяет сэкономить на использовании кондиционера.
            </p>
            <div style={{ backgroundColor: '#38a000', height: '1px' }} />
            <p className={`font-bold text-lg`}>Экологичность</p>
            <p className={`font-light text-md leading-tight ml-2`} >
              Наличие в составе только натуральной древесины (сосны) и экологически чистых связующих
              компонентов (смолы на полиуретановой основе MDI 4%) обеспечивает абсолютную безопасность для
              человека и окружающей среды.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
