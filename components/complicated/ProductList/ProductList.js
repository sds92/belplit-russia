import React from 'react';
import Link from 'next/link';

export default function ProductList({ listItems }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div className={`px-4 w-full py-2`}>
      {listItems &&
        listItems.map((item, index) => (
          <Link key={`PR${index}`} href={`/catalog/${item.id}`} passHref>
            <div
              className={`cursor-pointer flex hover:text-belplit border-b py-1`}
              onMouseEnter={() => setHover({ [index]: true })}
              onMouseLeave={() => setHover({ [index]: false })}
            >
              <span
                className={`trans-menu-item transition-duration-500 ${
                  !hover[index] ? 'w-1 opacity-0' : 'w-3 opacity-100'
                }`}
              >
                {'>'}
              </span>
              &nbsp;
              {item.title}
            </div>
          </Link>
        ))}
    </div>
  );
}
