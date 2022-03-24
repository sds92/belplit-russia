import React from 'react';
import Link from 'next/link';

export default function ProductCardSM(props) {
  const { product } = props;

  return (
    <Link href={`/catalog/${product.info.slug}`} passHref>
      <div className={`m-2 relative transition-all active:scale-105 hover:scale-105 rounded-md`}>
        <div className={`flex flex-col justify-between w-full items-start h-full`}>
          <div className={`w-full rounded-md `}>
            <div
              className={`z-10 relative w-full h-60 cursor-pointer shadow-md rounded-md overflow-hidden`}
              style={{
                background: `no-repeat url(images/products/sm/${product.info.slug}.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className={`flex flex-col justify-between h-full relative w-full px-4 rounded-md`}>
              <div
                className={`flex text-zinc-800 items-center h-max cursor-pointer text-base transition-all font-bold `}
              >
                <div className={` pb-1 text-zinc-900`}>
                  <span className={` font-bold uppercase`}>{product.info.displayName && `Белплит ${product.info.displayName}` || product.info.slug}</span>

                  <span className={` font-light text-zinc-400 hover:text-belplit_dark`}> / Подробнее</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
