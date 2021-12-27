// react
import React from 'react';

// etc
import { Navbar } from '../';
import { Text } from '../../lib';
import { app } from '../../../configs/app';

export default function Header(props) {
  const { lgView } = props;

  return (
    <header className={`bg-slate-100 shadow-md pb-2 z-50`}>
      <div className={`flex justify-center`}>
        {lgView && (
          <div className={`${lgView && `w-1/3 p-1`}`}>
            <Text>{app.contacts.address1.value}</Text>
            <Text>{app.workingHoars.value}</Text>
          </div>
        )}
        <Text ta={'center'} ts={'3xl'} py={4} extraClasses={`${lgView && `w-1/3`}`}>
          {app.title}
        </Text>

        {lgView && (
          <div className={`w-1/3 flex justify-end`}>
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
