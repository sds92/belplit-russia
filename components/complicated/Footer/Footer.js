import React from 'react';
import { Text } from '../../lib';
// etc
import { app } from '../../../configs/app';

export default function Footer() {
  return (
    <footer className={`pt-2 sm:bg-slate-500`}>
      <div className={`flex flex-col w-full sm:flex-row `}>
        <div className={`w-full sm:w-1/3 rounded-md overflow-hidden shadow-md mx-4 mt-2 mb-4`}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.6768022748242!2d37.26887351592759!3d55.67722018053323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b550444d104d95%3A0x2e41f78026092c4!2z0JzQvtC70L7QtNGR0LbQvdCw0Y8g0YPQuy4sIDQ2LCDQntC00LjQvdGG0L7QstC-LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCAxNDMwMDc!5e0!3m2!1sru!2sru!4v1605787923881!5m2!1sru!2sru'
            width='100%'
            height='100%'
            aria-hidden='false'
            tabIndex='0'
          ></iframe>
        </div>

        <div className={`flex w-full flex-col md:flex-row sm:w-2/3 bg-slate-500 p-2`}>
          <div className={`p-4`}>
            <p className={`text-slate-100 font-bold`}>{app.contacts.title}:</p>
            <div className={`bg-slate-100`} style={{ height: '1px' }} />
            <p className={`text-slate-100 ml-2 text-sm`}>{app.contacts.address1.title}</p>
            <p className={`mx-4 text-slate-100 text-xs`}>{app.contacts.address1.value}</p>
            <br />
            <p className={`text-slate-100 ml-2 text-sm`}>{app.contacts.address2.title}</p>
            <p className={`mx-4 text-slate-100 text-xs`}>{app.contacts.address2.value}</p>
            <br />
            <p className={`text-slate-100 ml-2 text-sm`}>{app.contacts.address3.title}</p>
            <p className={`mx-4 text-slate-100 text-xs`}>{app.contacts.address3.value}</p>
          </div>
          <div className={`p-4 flex flex-col`}>
            <p className={`text-slate-100 font-bold`}>{app.workingHoars.title}:</p>
            <div className={`bg-slate-100`} style={{ height: '1px' }} />
            <p className={`my-1 text-slate-100 text-sm`}>{app.workingHoars.value}</p>

            <p className={`sm:absolute text-slate-100 bottom-0 text-right text-sm`}>
              © 2021 Сайт создан с помощью{' '}
              <a href='https://roboweb.site/'>
                <strong>RoboWeb</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
