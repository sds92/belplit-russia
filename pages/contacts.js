import React from 'react';

import { FeedBack } from '../components/complicated';
import { Text } from '../components/lib';
import { app } from '../configs/app';

export default function Contacts({lgView}) {
  return (
    <div>
      <Text ta={'center'} ts={'3xl'}>{app.contacts.title}</Text>

      <Text>{app.contacts.meta.field1}</Text>
      <FeedBack lgView={lgView}/>
    </div>
  );
}
