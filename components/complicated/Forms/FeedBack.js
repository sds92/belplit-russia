import React from 'react';
import { useRouter } from 'next/router';

export default function FeedBack(props) {
  const router = useRouter();
  console.log("🚀 ~ file: FeedBack.js ~ line 6 ~ FeedBack ~ router", router)
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
      props.onFulfilled('loading');
    } catch (err) {}

    fetch('/api/sendform', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...formState, path: router.asPath}),
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
        try {
          props.onFulfilled('success');
        } catch (err) {}
        setTimeout(() => {
          setFormStatus('show');
        }, 4000);
      });
  }

  return (
    <div>
      <form className={`max-w-xl w-full mx-auto`}>
        {formStatus === 'show' && (
          <div className={`flex flex-col w-full relative items-center justify-center max-w-xl`}>
            <div className={`flex flex-col sm:flex-row sm:gap-2 w-full relative items-center justify-center`}>
              <div className={`w-full flex sm:max-w-md relative`}>
                {checkFormStatus[0] && (
                  <p className={`form-text-alert text-red-600 absolute right-4 top-2`}>3 - 50 символов</p>
                )}
                <input
                  className={`w-full px-2 my-2 pt-2 border-b ${
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
                  className={`w-full px-2 my-2 border-b pt-2 ${
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

            <div className={`w-full relative`}>
              {checkFormStatus[2] && (
                <p className={`form-text-alert text-red-600 right-4 top-0`}>3 - 500 символов</p>
              )}
              <textarea
                className={`border rounded-md w-full px-2 ${
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

            <div className={`gap-2 flex flex-col sm:flex-row w-full relative items-center justify-between`}>
              <div className={`w-full flex relative`}>
                {checkFormStatus[3] && (
                  <p className={`form-text-alert text-red-600 absolute right-4 top-2`}>
                    Введите корректный email
                  </p>
                )}
                <input
                  className={`border-b w-full pt-2 px-2 my-2 sm:max-w-md ${
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
              <div
                onClick={sendForm}
                className={`bg-belplit text-center text-slate-100 rounded-md cursor-pointer px-4 py-2 w-full`}
              >
                Отправить
              </div>
            </div>
          </div>
        )}
        {formStatus === 'pending' && <p className={`text-center py-10`}>Отправка запроса</p>}
        {formStatus === 'complete' && <p className={`text-center py-10`}>Запрос успешно отправлен. Спасибо за обращение!</p>}
      </form>
    </div>
  );
}
