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
                  <div className={`cursor-pointer hover:scale-110 active:scale-110`} key={`SOCIAL${index}`}>
                    <a target='_blank' href={`${item[1]}`} rel='noopener noreferrer'>
                      <Icon extraClasses={`w-6 h-6`} />
                    </a>
                  </div>
                );
              })}
            {!props.mdView ? <div className={`text-slate-900 hover:text-belplit transition-all whitespace-nowrap`}>
              <a href={`tel:${app.contacts.phones[0]}`}>{app.contacts.phones[0]}</a>
            </div> : <Icons.Phone extraClasses={`w-8 h-8 text-belplit mt-1.5 -ml-0.5 hover:scale-110 active:scale-110 cursor-pointer`}/>}
             
          </>
        );
      }}
    </AppContext.Consumer>
  );
}
