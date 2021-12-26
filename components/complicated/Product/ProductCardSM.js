import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '../../lib';

export default function ProductCardSM(props) {
  const { title, files, id } = props.product;

  return (
    <div className={`w-1/2 max-w-xs relative rounded-md shadow-md m-2 p-2 bg-slate-100`}>
      <Link href={`/catalog/${id}`} passHref>
        <div>
          <Text ta={'center'} ts={'lg'}>{title}</Text>
          <div className={`relative w-full h-44 cursor-pointer`}>
            <Image
              src={`/images/products/sm/${files.avatarSM}`}
              alt={`${title} logo`}
              layout='fill'
              objectFit='contain'
            />
          </div>
          <a>
            <Text
              ts={'md'}
              mx={'6'}
              py={2}
              tw={'normal'}
              ta={'center'}
              extraClasses={`bg-belplit max-w-xs cursor-pointer`}
              tc={'slate-200'}
              my={'2'}
              
            >
              Подробнее
            </Text>
          </a>
        </div>
      </Link>
    </div>
  );
}
