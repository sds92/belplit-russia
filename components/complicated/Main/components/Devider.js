// react
import React from 'react';      
import Link from 'next/link';

// ect
import { Text } from '../../../lib';

export default function Devider({input}) {
  return (
    <div className={`flex justify-between items-center mx-4 mt-4`}>
      <p className={`text-left text-xl sm:text-3xl font-bold`}>
        <Text>{input.text}</Text>
      </p>
      {input.link && <Link href={input.link[0]}>
        <a
          className={`text-right whitespace-nowrap bg-belplit bg-opacity-75 rounded-md p-2 shadow-md text-white`}
        >{input.link[1]}</a>
      </Link>}
    </div>
  );
}
 
