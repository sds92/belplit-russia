import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '../../lib';

export default function ProductCardSM(props) {
  const { title, files, id } = props.product;

  return (
    <div className={`w-1/2 max-w-xs relative rounded-md shadow-md m-2 p-2 bg-slate-100`}>
      <Link href={`/catalog/${id}`}>
        <>
          <Text ta={'center'}>{title}</Text>
          <div className={`h-32 relative`}>
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
              mx={'2'}
              py={2}
              tw={'normal'}
              ta={'center'}
              extraClasses={`bg-belplit max-w-xs cursor-pointer`}
              tc={'slate-200'}
            >
              Подробнее
            </Text>
          </a>
        </>
      </Link>
    </div>
  );
}
