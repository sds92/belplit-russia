import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '../../lib';

export default function ProductCardSM(props) {
  const { title, files, id } = props.product;

  return (
    <div className={`product-card relative rounded-md shadow-md m-2 p-2 bg-slate-50`}>
      <Link href={`/catalog/${id}`} passHref>
        <div className={`flex flex-col justify-between items-center mx-auto max-w-xs h-full`}>
          <Text tw={'bold'} ta={'center'} ts={'lg'} extraClasses={`h-14`} my={2}>
            {title}
          </Text>
          <div className={`relative w-full h-44 cursor-pointer`}>
            <Image
              src={`/images/products/sm/${files.avatarSM}`}
              alt={`${title} logo`}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <a>
            <div className={`bg-belplit w-full cursor-pointer mx-auto py-2 px-4 text-center text-slate-100 mt-2 rounded-md`}>Подробнее</div>
          </a>
        </div>
      </Link>
    </div>
  );
}
