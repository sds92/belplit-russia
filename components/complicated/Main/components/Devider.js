// react
import React from 'react';
import Link from 'next/link';

// ect
import { Text } from '../../../lib';

export default function Devider({ input }) {
  return (
    <div className={`bg-zinc-400 mt-5 md:mt-20`}>
      <div className={`bg-belplit bg-opacity-60 w-full zero:px-1 sm:px-4`}>
        <div className={`flex zero:justify-center sm:justify-between items-center max-w-7xl mx-auto`}>
          <p>
            <Text className={`zero:text-center sm:text-left text-zinc-800 zero:text-3xl sm:text-6xl font-bold max-w-sm my-4`}>{input.text}</Text>
          </p>
          {input.link && (
            <div className={`self-end zero:hidden sm:block`}>
              <Link href={input.link[0]} passHref>
                <div
                  className={`cursor-pointer mb-4 hover:scale-105 active:scale-105 text-center whitespace-nowrap  bg-zinc-100 text-lg font-bold uppercase text-zinc-800 rounded-md py-2 px-8 shadow-md`}
                >
                  {input.link[1]}
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
