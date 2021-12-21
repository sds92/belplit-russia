import React from 'react';
import { Text } from '../../lib';
// etc
import { app } from '../../../configs/app';

export default function Footer() {
  return (
    <footer>
      <div className={`flex flex-col w-full sm:flex-row`}>
        <div className={`w-full sm:w-1/3 border`}>
            GOOGLE MAPS
        </div>

        <div className={`flex w-full sm:w-2/3`}>
          <div className={``}>
            <div>{app.contacts.title}</div>
            <div>{app.contacts.address1.title}</div>
            <div>{app.contacts.address1.value}</div>
            <div>{app.contacts.address2.title}</div>
            <div>{app.contacts.address2.value}</div>
            <div>{app.contacts.address3.title}</div>
            <div>{app.contacts.address3.value}</div>
          </div>
          <div className={``}>
            <div>{app.workingHoars.title}</div>
            <Text>{app.workingHoars.value}</Text>
          </div>
          <div className={``}>
            <Text>{app.copyright}</Text>
          </div>
        </div>
      </div>
    </footer>
  );
}
