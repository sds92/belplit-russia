import React from 'react';
import { Text } from '../../lib';
// etc
import { app } from '../../../configs/app';

export default function Footer() {
  return (
    <footer>
      <div className={`flex flex-col w-full sm:flex-row`}>
        <div className={`w-full sm:w-1/3`}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.6768022748242!2d37.26887351592759!3d55.67722018053323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b550444d104d95%3A0x2e41f78026092c4!2z0JzQvtC70L7QtNGR0LbQvdCw0Y8g0YPQuy4sIDQ2LCDQntC00LjQvdGG0L7QstC-LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCAxNDMwMDc!5e0!3m2!1sru!2sru!4v1605787923881!5m2!1sru!2sru'
            width='100%'
            height='100%'
            aria-hidden='false'
            tabIndex='0'
          ></iframe>
          ;
        </div>

        <div className={`flex w-full sm:w-2/3`}>
          <div className={``}>
            <div>{app.contacts.title}</div>
            <div>{app.contacts.address1.title}</div>
            <div>{app.contacts.address1.value}</div>
            <div>{app.contacts.address2.title}</div>
            <div>{app.contacts.address2.value}</div>
            <div>{app.contacts.address3.title}</div>
            <div>{app.contacts.address3.value}</div>
          </div>
          <div className={``}>
            <div>{app.workingHoars.title}</div>
            <Text>{app.workingHoars.value}</Text>
          </div>
          <div className={``}>
            <Text>{app.copyright}</Text>
          </div>
        </div>
      </div>
    </footer>
  );
}
