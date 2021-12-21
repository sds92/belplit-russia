import React from 'react';
import FormControl from '@mui/material/FormControl';
import { Box, TextField } from '@mui/material';

import { Text } from '../../lib';

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
    <Box component='form'>
      <form>
        <div className={`flex flex-col`}>
          <div className={`flex flex-col sm:flex-row`}>
            <TextField
              required
              id='ClientName'
              placeholder='Имя'
              onChange={(e) =>
                setFormState((state) => {
                  return { ...state, clientName: e.target.value };
                })
              }
            />
            <TextField
              required
              id='outlined-basic'
              placeholder='Телефон'
              onChange={(e) =>
                setFormState((state) => {
                  return { ...state, clientPhone: e.target.value };
                })
              }
            />
          </div>
          <TextField
            id='outlined-textarea'
            label='Сообщение'
            placeholder='Сообщение'
            rows={4}
            multiline
            onChange={(e) =>
              setFormState((state) => {
                return { ...state, body: e.target.value };
              })
            }
          />
        </div>
        <div className={`flex flex-col sm:flex-row`}>
          <TextField
            required
            id='outlined-basic'
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
            extraClasses={`bg-green-500 rounded-md cursor-pointer`}
          >
            Отправить
          </Text>
        </div>
      </form>
    </Box>
  );
}
