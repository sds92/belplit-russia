import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '../../lib';

export default function ProductCardSM(props) {
  const { title, files, id } = props.product;

  return (
    <div className={`border w-1/2 max-w-xs relative`}>
      <Text ta={'center'}>{title}</Text>
      <Image src={`/images/products/sm/${files.avatarSM}`} alt={`${title} logo`} width={230} height={159} />
      <Link href={`/catalog/${id}`}>
        <a>
          <Text
            ts={'md'}
            mx={'2'}
            py={2}
            tw={'normal'}
            ta={'center'}
            extraClasses={`bg-green-600 max-w-xs`}
            tc={'slate-200'}
          >
            Подробнее
          </Text>
        </a>
      </Link>
    </div>
  );
}
