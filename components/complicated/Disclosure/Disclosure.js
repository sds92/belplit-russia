import { Disclosure, Transition } from '@headlessui/react';
import { Icons } from '../';

export default function MyDisclosure(props) {
  const { data } = props;
  return (
    <div className='px-4' >
      <div className='w-full p-2 rounded-2xl'>
        {data &&
          data.map((item, index) => {
            if (item[0]?.[0])
              return (
                <Disclosure key={`Disclosure${index}`}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='my-1 flex shadow-md justify-between rounded-md w-full text-sm font-medium text-left overflow-hidden'>
                        <span className='bg-white text-lg hover:bg-belplit hover:bg-opacity-10 w-full px-4 py-2'>
                          {item[1]}
                        </span>
                        <div className='bg-belplit bg-opacity-75 h-full'>
                          <Icons.ChevronUp
                            className={`${open ? 'transform rotate-180' : ''} w-11 text-white`}
                          />
                        </div>
                      </Disclosure.Button>
                      
                        <Disclosure.Panel className={`${open ? 'min-h-full' : 'h-0'} transition-1 px-4 pt-4 pb-2 text-sm text-gray-500`}>
                          {item[0].map((item) => (
                            <p key={Math.random().toString(36)}>{`> ${item}`}</p>
                          ))}
                        </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              );
          })}
      </div>
    </div>
  );
}
