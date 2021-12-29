// react
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// etc
import { Navbar } from '../';
import { Text } from '../../lib';
import { app } from '../../../configs/app';

// logo
import logo from '../../../public/images/logo/logo.png';

export default function Header(props) {
  const { lgView } = props;
  const router = useRouter();

  return (
    <header className={`bg-slate-50 shadow-md pb-2 z-50`}>
      <div className={`flex ${lgView ? `justify-between` : `justify-center`}`}>
        {lgView && (
          <div className={`${lgView && `w-1/3 p-1 ml-2 mt-2`}`}>
            <Text ts={'sm'} py={1}>
              {app.contacts.address1.value}
            </Text>
            <Text tw={'bold'} py={1}>
              {app.workingHoars.value}
            </Text>
          </div>
        )}
        <div className={`cursor-pointer pt-3 mt-2`}>
          <Image
            src={logo}
            alt={'belplit-logo'}
            layout='fixed'
            objectFit='cover'
            onClick={() => router.push('/main')}
          />
        </div>

        {lgView && (
          <div className={`mr-2 mt-3 w-1/3 flex justify-end`}>
            <a href='tel:88005337881'>{app.contacts.phone1}</a>
          </div>
        )}
      </div>
      <div>
        <Navbar lgView={lgView}>
          {!lgView && (
            <Text ta={'right'} extraClasses={`${lgView && `w-1/3`}`}>
              {app.contacts.phone1}
            </Text>
          )}
        </Navbar>
      </div>
    </header>
  );
}
