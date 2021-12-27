import React from 'react';
import FormControl from '@mui/material/FormControl';
import { Box, TextField } from '@mui/material';

import { Text } from '../../lib';
import { app } from '../../../configs/app';

export default function FeedBack(props) {
  const [formStatus, setFormStatus] = React.useState('show');
  const [formState, setFormState] = React.useState({
    clientName: '',
    clientPhone: '',
    body: '',
    clientEmail: '',
  });
  const [checkFormStatus, setCheckFormStatus] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  function checkForm() {
    let res = false;
    let a = Promise.resolve(/^[а-я, А-Я, a-z, A-Z]{3,20}$/.test(formState.clientName));
    let b = Promise.resolve(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(formState.clientPhone));
    let c = Promise.resolve(/.{3,500}/.test(formState.body));
    let d = Promise.resolve(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        formState.clientEmail
      )
    );
    return Promise.all([a, b, c, d]).then((values) => {
      console.log(values);
      res = true;
      values.map((item, index) => {
        if (!item) {
          res = false;
          setCheckFormStatus((state) => {
            return { ...state, [index]: true };
          });
          setTimeout(() => {
            setCheckFormStatus((state) => {
              return { ...state, [index]: false };
            });
          }, 3000);
        }
      });
      return res;
    });
  }

  function resetForm() {
    setFormState({
      clientName: '',
      clientPhone: '',
      body: '',
      clientEmail: '',
    });
  }

  async function sendForm() {
    let check = await checkForm();
    if (!check) {
      return;
    }
    setFormStatus('pending');
    try {
      props.onFulfilled('pending');
    } catch (err) {}

    fetch('/api/sendform', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    })
      .then((res) => {
        if (res.ok) {
          console.log('Succeeded!');
          resetForm();
        }
        if (!res.ok) {
          console.log('Error!');
          resetForm();
        }
        setTimeout(() => {
          return res;
        }, 1000);
      })
      .then(() => {
        setFormStatus('complete');
        setTimeout(() => {
          setFormStatus('show');
          try {
            props.onFulfilled('hide');
          } catch (err) {}
        }, 3000);
      });
  }

  return (
    <div>
      {formStatus === 'show' && (
        <form>
          <div className={`flex flex-col w-full relative items-center justify-center`}>
            <div className={`flex flex-col sm:flex-row w-full relative items-center justify-center`}>
              <div className={`w-full flex sm:max-w-md relative`}>
                {checkFormStatus[0] && (
                  <p className={`form-text-alert text-red-600 absolute right-4 top-2`}>3 - 50 символов</p>
                )}
                <input
                  className={`w-full px-2 mx-2 sm:mr-2 my-2 pt-2 border-b ${
                    checkFormStatus[0] ? `rounded-md border border-red-600` : ``
                  }`}
                  required
                  id='FeedBackFormClientName'
                  placeholder='Имя'
                  value={formState.clientName}
                  onChange={(e) =>
                    setFormState((state) => {
                      return { ...state, clientName: e.target.value };
                    })
                  }
                />
              </div>
              <div className={`w-full flex sm:max-w-md relative`}>
                {checkFormStatus[1] && (
                  <p className={`form-text-alert text-red-600 absolute right-4 top-2`}>Не верный номер</p>
                )}

                <input
                  className={`w-full px-2 mx-2 sm:ml-2 my-2 border-b pt-2 ${
                    checkFormStatus[1] ? `rounded-md border border-red-600` : ``
                  }`}
                  required
                  id='FeedBackFormClientPhone'
                  placeholder='Телефон'
                  value={formState.clientPhone}
                  onChange={(e) =>
                    setFormState((state) => {
                      return { ...state, clientPhone: e.target.value };
                    })
                  }
                />
              </div>
            </div>
            <div className={`relative w-full flex items-center justify-center px-2`}>
              <div className={`max-w-4xl w-full relative`}>
                {checkFormStatus[2] && (
                  <p className={`form-text-alert text-red-600 right-4 top-0`}>3 - 500 символов</p>
                )}
                <textarea
                  className={`border rounded-md w-full px-2 max-w-4xl ${
                    checkFormStatus[2] ? `border border-red-600` : ``
                  }`}
                  required
                  id='FeedBackFormBody'
                  placeholder='Сообщение'
                  rows={4}
                  value={formState.body}
                  onChange={(e) =>
                    setFormState((state) => {
                      return { ...state, body: e.target.value };
                    })
                  }
                />
              </div>
            </div>
            <div className={`flex flex-col sm:flex-row w-full relative items-center justify-center`}>
              <div className={`w-full flex sm:max-w-md relative`}>
                {checkFormStatus[3] && (
                  <p className={`form-text-alert text-red-600 absolute right-4 top-2`}>
                    Введите корректный email
                  </p>
                )}
                <input
                  className={`border-b w-full pt-2 px-2 mx-2 my-2 sm:max-w-md ${
                    checkFormStatus[3] ? `rounded-md border border-red-600` : ``
                  }`}
                  required
                  id='FeedBackFormClientEmail'
                  placeholder='E-mail'
                  value={formState.clientEmail}
                  onChange={(e) =>
                    setFormState((state) => {
                      return { ...state, clientEmail: e.target.value };
                    })
                  }
                />
              </div>
              <Text
                my={2}
                py={2}
                px={2}
                mx={2}
                ta={'center'}
                tc={'slate-100'}
                extraClasses={`bg-belplit rounded-md cursor-pointer sm:max-w-md sm:w-1/2`}
                onClick={sendForm}
              >
                Отправить
              </Text>
            </div>
          </div>
        </form>
      )}
      {formStatus === 'pending' && <Text>Отправка запроса</Text>}
      {formStatus === 'complete' && <Text>Запрос успешно отправлен. Спасибо за обращение!</Text>}
    </div>
  );
}
