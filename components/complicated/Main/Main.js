// react
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// etc
import GridImages from './GridImages';
import { Text } from '../../lib';
import { app } from '../../../configs/app';

export default function Main() {
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

      <div
        className={`flex flex-col lg:flex-row rounded-md shadow-md overflow-hidden my-20 mx-4 bg-slate-200`}
      >
        <div
          className={`relative w-full lg:w-1/2 zero:h-44 lg:h-auto lg:max-h-user rounded-md order-last lg:order-first`}
        >
          <Image layout='fill' objectFit='cover' src={'/images/mainpage/bg1.png'} alt={''} />
        </div>
        <div className={`w-full lg:w-1/2 rounded-md sm:p-4`}>
          <p className={'text-justify font-light sm:bg-white sm:border sm:border-belplit sm:rounded-lg p-8 text-sm'}>
            <p className={`font-bold text-center text-xl sm:text-3xl py-2`}>
              МДВП <span className={`text-belplit`}>БЕЛТЕРМО</span>
            </p>
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

      <div className={`flex justify-between items-center mx-4`}>
        <p className={`text-left text-xl sm:text-3xl font-bold`}>
          Применение <span className={`text-belplit`}>БЕЛТЕРМО</span>
        </p>
        <Link href={`/info/objects`}>
          <a
            className={`text-right whitespace-nowrap bg-belplit bg-opacity-75 rounded-md p-2 shadow-md text-white`}
          >{`другие объекты`}</a>
        </Link>
      </div>

      <GridImages />
      <p className={`text-left text-xl sm:text-3xl font-bold mt-20 mx-4`}>
        Преимущества <span style={{ color: '#38a000' }}>БЕЛТЕРМО</span>
      </p>
      <div className={`flex flex-col mx-4`}>
        <div className={`rounded-md sm:shadow-md sm:p-10 my-5 bg-slate-200`}>
          <div className={`rounded-md bg-white p-10 cursor-default`}>
            <p className={`font-bold text-lg`}>Простота монтажа</p>
            <p className={`font-light text-md leading-tight ml-2`}>
              Удобный формат плит (прямая кромка/шип-паз/ступень) и экологичность материала позволяют
              производить монтаж вручную без использования защитных средств. Плиты плотно стыкуются и при
              необходимости легко нарезаются до нужного размера.
            </p>
            <div className={`bg-slate-300`} style={{ height: '1px' }} />
            <p className={`font-bold text-lg`}>Защита от ветра</p>
            <p className={`font-light text-md leading-tight ml-2`}>
              Высокое сопротивление продуванию потокам воздуха (50 - 100 (кПа*с)/м³) обеспечивает надёжную
              защиту от ветра.
            </p>
            <div className={`bg-slate-300`} style={{ height: '1px' }} />
            <p className={`font-bold text-lg`}>Отличная звукоизоляция</p>
            <p className={`font-light text-md leading-tight ml-2`}>
              Высокая плотность (110-200 кг/м³) и однородность защищают от ударного шума внутри дома (Rw=23-27
              Дб), а высокая пористость позволяет поглощать шум снаружи (άw=0,60-0,95).
            </p>
            <div className={`bg-slate-300`} style={{ height: '1px' }} />
            <p className={`font-bold text-lg`}>Пожарная безопасность</p>
            <p className={`font-light text-md leading-tight ml-2`}>
              Инертность горения посредством обугливания не распространяет огонь (огнестойкость "E" (еврокласс
              по EN 13501-1).
            </p>
            <div className={`bg-slate-300`} style={{ height: '1px' }} />
            <p className={`font-bold text-lg`}>Комфортный микроклимат</p>
            <p className={`font-light text-md leading-tight ml-2`}>
              Способность поглощать и отдавать атмосферную влагу (Sd=0,06-0,72 м) позволяет плитам «дышать»,
              не теряя при этом своих технических характеристик, обеспечивая оптимальную влажность и
              предотвращая образование плесени или грибка на стенах и потолке.
            </p>
            <div className={`bg-slate-300`} style={{ height: '1px' }} />
            <p className={`font-bold text-lg`}>Защита от холода</p>
            <p className={`font-light text-md leading-tight ml-2`}>
              Низкая теплопроводность (λD= 0,038-0,041 Вт/м*К) не позволяет теплу выходить наружу, а холоду -
              проникать внутрь.
            </p>
            <div className={`bg-slate-300`} style={{ height: '1px' }} />
            <p className={`font-bold text-lg`}>Защита от жары</p>
            <p className={`font-light text-md leading-tight ml-2`}>
              Благодаря высокому значению теплоемкости (с=2100 Дж/(кг*К) в доме будет прохладно даже в жаркие
              дни, что позволяет сэкономить на использовании кондиционера.
            </p>
            <div className={`bg-slate-300`} style={{ height: '1px' }} />
            <p className={`font-bold text-lg`}>Экологичность</p>
            <p className={`font-light text-md leading-tight ml-2`}>
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
