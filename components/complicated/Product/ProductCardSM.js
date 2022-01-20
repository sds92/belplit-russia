import React from 'react';
import Link from 'next/link';

export default function ProductCardSM(props) {
  const { title, files, id, prices } = props.product;

  return (
    <Link href={`/catalog/${id}`} passHref>
      <div className={`m-2 relative transition-all active:scale-105 hover:scale-105`}>
        <div className={`flex flex-col justify-between w-full items-start h-full`}>
          <div className={`w-full rounded-md shadow-md`}>
            <div
              className={`z-10 relative w-full h-60 cursor-pointer rounded-md overflow-hidden`}
              style={{
                background: `no-repeat url(images/products/sm/${files.avatarSM})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div
              className={`flex flex-col justify-between h-full relative w-full px-4 rounded-md`}
            >
              <div
                className={`flex text-zinc-800 items-center h-10 cursor-pointer text-base transition-all font-bold `}
              >
                <p className={`hover:text-belplit_dark pb-1`}>
                  {title.toString().replaceAll('Белтермо ', '')}
                  <span className={`text-zinc-600 font-light hover:text-belplit_dark`}> / Подробнее</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
