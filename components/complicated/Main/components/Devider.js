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
            <Link href={input.link[0]} passHref>
              <div
                className={`cursor-pointer self-end mb-4 hover:scale-105 active:scale-105 text-center whitespace-nowrap  bg-zinc-100 text-xl text-zinc-800 rounded-md py-2 px-8 shadow-md`}
              >
                {input.link[1]}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
