import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '../../lib';

export default function ProductCardSM(props) {
  const { title, files, id } = props.product;

  return (
    <Link href={`/catalog/${id}`} passHref>
      <div
        className={`justify-self-auto min-w-xs my-2 mx-2 p-2 relative rounded-md shadow-md bg-slate-50 cursor-pointer`}
      >
        <div className={`flex flex-col justify-between w-full  items-center px-4 h-full`}>
          <Text tw={'bold'} ta={'center'} ts={'lg'} extraClasses={`h-14`} my={2}>
            {title}
          </Text>
          <div className={`relative w-full h-52 cursor-pointer`}>
            <Image
              src={`/images/products/sm/${files.avatarSM}`}
              alt={`${title}`}
              width={200}
              height={150}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <a>
            <div
              className={`bg-belplit w-full cursor-pointer mx-auto py-2 px-4 text-center text-slate-100 mt-2 rounded-md`}
            >
              Подробнее
            </div>
          </a>
        </div>
      </div>
    </Link>
  );
}
