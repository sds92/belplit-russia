import React from 'react';
import { withSize } from 'react-sizeme';

import { Navbar } from '../';
import { Text } from '../../lib';
import { app } from '../../../configs/app';

export default function Header(props) {
  const { lgView } = props;

  return (
    <header>
      <div className={`flex justify-center`}>
        {lgView && (
          <div className={`${lgView && `w-1/3`}`}>
            <Text>{app.contacts.address1.value}</Text>
            <Text>{app.workingHoars.value}</Text>
          </div>
        )}
        <Text ta={'center'} ts={'3xl'} extraClasses={`${lgView && `w-1/3`}`}>
          {app.title}
        </Text>
        {lgView && (
          <Text ta={'right'} extraClasses={`${lgView && `w-1/3`}`}>
            {app.contacts.phone1}
          </Text>
        )}
      </div>
      <Navbar lgView={lgView}/>
    </header>
  );
}
