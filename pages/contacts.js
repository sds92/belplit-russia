import React from 'react';

import { FeedBack as FeedBackForm } from '../components/complicated';
import { Text } from '../components/lib';
import { app } from '../configs/app';

export default function Contacts({ lgView }) {
  return (
    <div>
      <Text ta={'center'} ts={'3xl'} tw={'bold'}>
        {app.contacts.title}
      </Text>

      <div className={`w-full flex flex-col sm:flex-row`}>
        <div className={`w-full sm:w-2/3`}>
          <FeedBackForm lgView={lgView} />
        </div>
        <div className={`flex w-full flex-wrap sm:flex-col sm:w-1/3`}>
          <div className={`sm:w-full w-1/2 `}>
            <Text tw={'bold'}>Телефон:</Text>
            <Text>{app.contacts.phone1}</Text>
            <Text>{app.contacts.phone2}</Text>
          </div>
          <div className={`w-1/2 sm:w-full`}>
            <Text tw={'bold'}>EMAIL:</Text>
            <Text>{app.contacts.email}</Text>
          </div>
          <div className={`w-1/2 sm:w-full`}>
            <Text tw={'bold'}>АДРЕС:</Text>
            <Text>{app.contacts.address1.value}</Text>
          </div>
          <div className={`w-1/2 sm:w-full`}>
            <Text tw={'bold'}>ВРЕМЯ РАБОТЫ:</Text>
            <Text>{app.workingHoars.value}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
