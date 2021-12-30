import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '../../lib';

export default function ProductCardSM(props) {
  const { title, files, id } = props.product;

  return (
    <Link href={`/catalog/${id}`} passHref>
      <div
        className={`justify-self-auto min-w-xs my-2 mx-2 p-2 relative rounded-md shadow-md bg-white cursor-pointer`}
      >
        <div className={`flex flex-col justify-between w-full  items-center px-4 h-full`}>
          <div className={`relative w-full h-52 cursor-pointer rounded-md overflow-hidden mt-4`}>
            <Image
              src={`/images/products/sm/${files.avatarSM}`}
              alt={`${title}`}
              width={200}
              height={150}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <Text tw={'bold'} ta={'center'} ts={'xl'} extraClasses={`h-14`} my={2}>
            {title}
          </Text>
          <a>
            <div
              className={`bg-belplit w-full cursor-pointer m-2 py-2 px-4 text-center text-slate-100 mt-2 rounded-md`}
            >
              Подробнее
            </div>
          </a>
        </div>
      </div>
    </Link>
  );
}
