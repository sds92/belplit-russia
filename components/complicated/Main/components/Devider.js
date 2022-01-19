// react
import React from 'react';
import Link from 'next/link';

// ect
import { Text } from '../../../lib';

export default function Devider({ input }) {
  return (
    <div className={`bg-zinc-400 mt-20`}>
      <div className={`bg-belplit bg-opacity-60 w-full`}>
        <div className={`flex justify-between items-center max-w-7xl mx-auto`}>
          <p>
            <Text className={`text-left text-6xl font-bold max-w-sm my-4`}>{input.text}</Text>
          </p>
          {input.link && (
            <Link href={input.link[0]}>
              <a
                className={`text-right whitespace-nowrap  bg-belplit bg-opacity-75 rounded-md p-2 shadow-md text-white`}
              >
                {input.link[1]}
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
