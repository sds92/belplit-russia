import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

export default function Radio({ label = '<TITLE>', ...props }) {
  const radioItems = props.radioItems || new Array(1);
  const [selected, setSelected] = useState(radioItems[0].key);

  const onChange = props.onChange(selected) || undefined;

  return (
    <div className='px-4 py-2 w-full'>
      <div className='w-full'>
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className='sr-only'>{label}</RadioGroup.Label>
          <div className='space-y-2'>
            {radioItems.map((radioItem) => (
              <RadioGroup.Option
                key={radioItem.key}
                value={radioItem.key}
                className={({ active, checked }) =>
                  `${active ? '' : ''}
                  ${checked ? 'bg-belplit bg-opacity-75 text-white' : 'bg-white'}
                    relative rounded-lg shadow-md px-5 py-1 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className='flex items-center justify-between w-full'>
                      <div className='flex items-center'>
                        <div className='text-sm'>
                          <RadioGroup.Description
                            as='span'
                            className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'}`}
                          >
                            <span>
                              {radioItem.bar}/{radioItem.square}
                            </span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className='flex-shrink-0 text-white'>
                          <CheckIcon className='w-6 h-6' />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox='0 0 24 24' fill='none' {...props}>
      <circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
      <path d='M7 13l3 3 7-7' stroke='#fff' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}