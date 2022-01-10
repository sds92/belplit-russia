// react
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// etc
import { Navbar, Icons, Logo } from '../';
import { Text } from '../../lib';
import { app } from '../../../configs/app';

// logo
import logo from '../../../public/images/logo/logo.png';

export default function Header(props) {
  const { lgView } = props;
  const router = useRouter();

  return (
    <header className={`bg-slate-50 shadow-md z-50`}>
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
        <div className={`px-4 flex items-center cursor-pointer mt-2 h-full relative`}>
          {/* <Image
            src={logo}
            alt={'belplit-logo'}
            layout='responsive'
            objectFit='contain'
            onClick={() => router.push('/main')}
          /> */}
          <Logo extraClasses={'logo'}/>
          <p className={`text-5xl text-belplit font-bold`}>БЕЛПЛИТ</p>
        </div>

        {lgView && (
          <div className={`mr-2 mt-3 w-1/3 flex justify-end`}>
            <div className={`flex items-center my-1`}>
              <Icons.Phone extraClasses={`w-6 h-6 text-belplit`} />
              <a href={`tel:${app.contacts.phone1}`} className={``}>
                {app.contacts.phone1}
              </a>
            </div>
          </div>
        )}
      </div>
      <div>
        <Navbar lgView={lgView}>
          {!lgView && (
            <div className={`flex items-center pt-1 my-1`}>
              <Icons.Phone extraClasses={`w-6 h-6 text-belplit`} />
              <a href={`tel:${app.contacts.phone1}`} className={``}>
                {app.contacts.phone1}
              </a>
            </div>
          )}
        </Navbar>
      </div>
    </header>
  );
}
