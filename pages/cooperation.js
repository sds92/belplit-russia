import React from 'react';
import { FeedBack as FeedBackForm } from '../components/complicated';
import { Text } from '../components/lib';
import { app } from '../configs/app';

export default function cooperation() {
  return (
    <div>
      <Text ta={'center'} ts={'3xl'} tw={'bold'}>
        {app.pages.cooperation.title}
      </Text>
      <Text>{app.pages.cooperation.content[1]}</Text>
      <FeedBackForm/>
    </div>
  );
}