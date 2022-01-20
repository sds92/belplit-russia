import React from 'react';
import Image from 'next/image';
// etc
import { Icons } from '../';
import { Logo } from '../';
import { app } from '../../../configs/app';

export default function Footer(lgView) {
  return (
    <>
      <div className={`h-96 cursor-default`}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.6768022748242!2d37.26887351592759!3d55.67722018053323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b550444d104d95%3A0x2e41f78026092c4!2z0JzQvtC70L7QtNGR0LbQvdCw0Y8g0YPQuy4sIDQ2LCDQntC00LjQvdGG0L7QstC-LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCAxNDMwMDc!5e0!3m2!1sru!2sru!4v1605787923881!5m2!1sru!2sru'
          width='100%'
          height='100%'
          aria-hidden='false'
          tabIndex='0'
          style={{ borderRadius: '5px' }}
        ></iframe>
      </div>
      <footer className={`bg-zinc-800 h-24`}>
        <div className={`flex flex-col md:flex-row justify-between items-center h-full`}>
          <div className={`basis-1/3 ml-0 sm:ml-10 md:ml-36 my-4`}>
            <a href='index.html'>
              <Logo extraClasses={`w-20 h-20 `} />
            </a>
          </div>

          <div className={`basis-2/3 my-4 flex justify-end items-center gap-6 text-slate-100 cursor-default pr-4`}>
            <Icons.Roboweb extraClasses={`w-10 h-10`} />
            <p>
              2021. Сайт создан с помощью <a href='https://roboweb.site/'>RoboWeb</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
