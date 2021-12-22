import React from 'react';
import FormControl from '@mui/material/FormControl';
import { Box, TextField } from '@mui/material';

import { Text } from '../../lib';
import { app } from '../../../configs/app';

export default function FeedBack({ lgView }) {
  const [formState, setFormState] = React.useState({
    clientName: '',
    clientPhone: '',
    body: '',
    clientEmail: '',
  });

  React.useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <form>
      <div className={`flex flex-col w-full relative`}>
        <Text tw={'bold'} ts={'xl'}>
          {app.contacts.meta.field1}
        </Text>
        <div className={`flex flex-col sm:flex-row w-full relative`}>
          <input
            className={'w-full sm:max-w-md border rounded-md'}
            required
            id='FeedBackFormClientName'
            placeholder='Имя'
            onChange={(e) =>
              setFormState((state) => {
                return { ...state, clientName: e.target.value };
              })
            }
          />
          <input
            className={'w-full sm:max-w-md border rounded-md'}
            required
            id='FeedBackFormClientPhone'
            placeholder='Телефон'
            onChange={(e) =>
              setFormState((state) => {
                return { ...state, clientPhone: e.target.value };
              })
            }
          />
        </div>
        <textarea
          className={'w-full max-w-4xl border rounded-md'}
          required
          id='FeedBackFormBody'
          placeholder='Сообщение'
          rows={4}
          onChange={(e) =>
            setFormState((state) => {
              return { ...state, body: e.target.value };
            })
          }
        />
      </div>
      <div className={`flex flex-col sm:flex-row`}>
        <input
          className={'w-full sm:max-w-md border rounded-md'}
          required
          id='FeedBackFormClientEmail'
          placeholder='E-mail'
          onChange={(e) =>
            setFormState((state) => {
              return { ...state, clientEmail: e.target.value };
            })
          }
        />

        <Text
          py={2}
          px={2}
          my={'auto'}
          ta={'center'}
          extraClasses={`bg-green-500 rounded-md cursor-pointer sm:max-w-md sm:w-1/2`}
        >
          Отправить
        </Text>
      </div>
    </form>
  );
}
