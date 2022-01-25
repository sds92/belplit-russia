import React from 'react';
import { Icons, FeedBack } from '../';
import { Text } from '../../lib';
import { AppContext } from '../Context/AppContext';

export default function Contacts() {
  const classes = {
    contactsTitle: `pl-2 border-b border-slate-300 w-full font-bold`,
  };
  return (
    <AppContext.Consumer>
      {(app) => {
        return (
          <div className={`flex flex-col w-full`}>
            <div className={`w-full flex flex-col sm:flex-row sm:gap-2 my-2 `}>
              {/* FORM */}
              <div className={`w-full flex flex-col ml-auto sm:w-2/3 md:w-7/12 max-w-xl`}>
                <p className={`font-bold max-w-4xl my-2 mx-auto text-xl pt-2`}>{'Свяжитесь с нами'}</p>
                <FeedBack />
              </div>

              {/* CONTACTS */}
              <div className={`flex w-full flex-wrap sm:max-w-xl sm:flex-col sm:w-1/3 md:w-5/12 p-2 mr-auto`}>
                <div className={`sm:w-full w-1/2 my-1 flex flex-col`}>
                  <div className={`flex h-6 mx-0.5`}>
                    <Icons.Phone extraClasses={`w-6 h-6 border-b border-belplit text-belplit`} />
                    <p className={classes.contactsTitle}>Телефон:</p>
                  </div>
                  <a href={`tel:${app.contacts.phones[0]}`} className={`mx-2`}>
                    {app.contacts.phones[0]}
                  </a>
                  <a href={`tel:${app.contacts.phones[1]}`} className={`mx-2`}>
                    {app.contacts.phones[1]}
                  </a>
                </div>
                <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
                  <div className={`flex h-6 mx-0.5`}>
                    <Icons.Mail extraClasses={`w-6 h-6 border-b border-belplit text-belplit`} />
                    <p className={classes.contactsTitle}>EMAIL:</p>
                  </div>
                  <Text mx={2}>{app.contacts.emails[0]}</Text>
                </div>
                <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
                  <div className={`flex h-6 mx-0.5`}>
                    <Icons.Location extraClasses={`w-6 h-6 pt-0.5 border-b border-belplit text-belplit`} />
                    <p className={classes.contactsTitle}>АДРЕС:</p>
                  </div>
                  <Text mx={2}>{app.contacts.addresses[0].value}</Text>
                </div>
                <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
                  <div className={`flex h-6 mx-0.5`}>
                    <Icons.Clock extraClasses={`w-6 h-6 border-b border-belplit text-belplit`} />
                    <p className={classes.contactsTitle}>ВРЕМЯ РАБОТЫ:</p>
                  </div>
                  <Text mx={2}>{app.workingHoars.value}</Text>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}
