import React from 'react';
import { Contacts, ProductComponent } from '../';
import { Text } from '../../lib';

export default function Catalog({ data, products, ...props }) {
  const { title } = data;
  return (
    <div className={props.lgView || props.mdView ? `pt-20`: `pt-10`}>
      <div className={`bg-belplit_2 ${props.lgView || props.mdView ? `py-4` : `py-1 fixed z-50 w-full shadow-md`}`}>
        
          <Text className={`uppercase pl-1.5 font-bold text-zinc-800 max-w-7xl ${props.lgView || props.mdView ? `text-3xl` : `text-3xl`} text-left mx-auto`}>
            {title}
          </Text>
        
      </div>
      <div className={`max-w-7xl mx-auto pt-20`}>
        <div className={`border-belplit rounded-lg`}>
          <div className={`pb-20 flex flex-wrap items-start justify-center mx-auto`}>
            {products.sort((a, b) => a.info.position - b.info.position).map((product, index) => (
              <div
                key={`P${index}`}
                className={`zero:w-full zero:mx-10 sm:mx-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 transition-all`}
              >
                <ProductComponent.CardSM product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr/>
      <Text className={`text-center py-5 text-3xl uppercase font-bold bg-belplit_2`}>Свяжитесь с нами</Text>
      <Contacts contactsHidden/>
      <br/>
      
    </div>
  );
}
