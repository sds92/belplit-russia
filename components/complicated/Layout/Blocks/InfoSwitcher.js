import React from 'react';
import { Text, Devider } from '../../../lib';
import { Logo } from '../..';
import useInterval from '../../../../utils/hooks/useInterval';

export default function InfoSwitcher(props) {
  const { text } = props.data.content;
  const { w } = props;
  const msgs = [
    [text.ib5, text.ib6],
    [text.ib7, text.ib8],
    [text.ib9, text.ib10],
    [text.ib11, text.ib12],
    [text.ib13, text.ib14],
    [text.ib15, text.ib16],
    [text.ib17, text.ib18],
    [text.ib19, text.ib20],
  ];
  const [curMsg, setCurMsg] = React.useState(0);
  const [state, setState] = React.useState({ opacity: 100 });

  useInterval(() => {
    if (msgs.length - 1 > curMsg) {
      setState((s) => ({ ...s, opacity: 0 }));
      setTimeout(() => {
        setCurMsg(curMsg + 1);
        setState((s) => ({ ...s, opacity: 100 }));
      }, 200);
    }
    if (msgs.length - 1 <= curMsg) {
      setState((s) => ({ ...s, opacity: 0 }));
      setTimeout(() => {
        setCurMsg(0);
        setState((s) => ({ ...s, opacity: 100 }));
      }, 200);
    }
  }, 3000);

  return (
    <>
      {/* <Devider data={{ title: text.ib4 }} color={`white`} ts={'6xl'} /> */}

      <div className={`max-w-7xl mx-auto  mt-10`}>
        <div className={`w-full flex gap-10 items-center justify-between`}>
          <div className={`w-1/2`}>
          </div>
          <div className={`w-1/2`}>
            <Text className={`mb-1 font-bold text-zinc-800 text-xl transition-all opacity-${state.opacity}`}>
              {msgs[curMsg][0]}
            </Text>
            <hr />
            <Text
              style={{ fontWeight: 300 }}
              className={`mt-2 w-96 p-8 rounded-md text-zinc-800 text-lg leading-5 tracking-normal transition-all opacity-${state.opacity}`}
            >
              {msgs[curMsg][1]}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
