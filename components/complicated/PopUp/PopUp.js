import React from 'react';
import { Icons } from '../../complicated';
import { Text } from '../../lib';

export default function PopUp(props) {
  const { children, title, arr } = props;
  const [show, setShow] = React.useState(false);
  return (
    <div>
      {
        <div className={`flex`}>
          <Text tw={'bold'} onClick={() => setShow(!show)} extraClasses={`cursor-pointer`}>{title || ''}</Text>

          <Icons.ChevronDown
            stroke={'#5d5e75'}
            extraClasses={`${show && `rotate-180`} w-6 h-6 cursor-pointer active:border rounded-full transition-all`}
            onClick={() => setShow(!show)}
          />
        </div>
      }
      {children && children}
      {arr && (
        <div className={`${!show ? 'max-h-0' : 'max-h-96'} overflow-hidden transition-all`}>
          {arr.map((item) => (
            <Text key={Math.random().toString(36)}>{`> ${item}`}</Text>
          ))}
        </div>
      )}
    </div>
  );
}
