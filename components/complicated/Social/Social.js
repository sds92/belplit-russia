import React from 'react';
import { Icons } from '..';
import { AppContext } from '../Context/AppContext';

export default function Social(props) {
  return (
    <AppContext.Consumer>
      {(app) => {
        return (
          <>
            {app.contacts.socials &&
              app.contacts.socials.map((item, index) => {
                const Icon = Icons[item[0]];
                return (
                  <React.Fragment key={`SOCIAL${index}`}>
                    {props.sm && <div className={`bg-slate-500 mx-2 h-8`} style={{ width: 1 }}></div>}
                    <div className={`cursor-pointer hover:scale-110 active:scale-110`}>
                      <a target='_blank' href={`${item[1]}`} rel='noopener noreferrer'>
                        <Icon extraClasses={`w-6 h-6`} />
                      </a>
                    </div>
                  </React.Fragment>
                );
              })}
            {!props.mdView ? (
              <>
                <div className={`bg-slate-500 mx-2 h-8`} style={{ width: 1 }}></div>
                <div className={`flex flex-col text-slate-900 whitespace-nowrap`}>
                  {!props.sm && (
                    <a className={`hover:text-belplit transition-all`} href={`tel:${app.contacts.phones[0]}`}>
                      {app.contacts.phones[0]}
                    </a>
                  )}
                  {!props.sm && (
                    <a className={`hover:text-belplit transition-all`} href={`tel:${app.contacts.phones[1]}`}>
                      {app.contacts.phones[1]}
                    </a>
                  )}
                  {props.sm && (
                    <a className={`hover:text-belplit transition-all`} href={`tel:${app.contacts.phones[0]}`}>
                      <Icons.Phone
                        extraClasses={`w-8 h-8 text-belplit mt-1.5 -ml-0.5 hover:scale-110 active:scale-110 cursor-pointer`}
                      />
                    </a>
                  )}
                </div>
              </>
            ) : (
              <a className={`hover:text-belplit transition-all`} href={`tel:${app.contacts.phones[0]}`}>
                <Icons.Phone
                  extraClasses={`w-8 h-8 text-belplit mt-1.5 -ml-0.5 hover:scale-110 active:scale-110 cursor-pointer`}
                />
              </a>
            )}
          </>
        );
      }}
    </AppContext.Consumer>
  );
}
