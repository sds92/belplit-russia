import React from 'react';
import { Text } from '../../../lib';
import useInterval from '../../../../utils/hooks/useInterval';

export default function InfoSwitcher(props) {
  const { text } = props.input;
  const { view } = props;
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
    <div className={`h-full bg-zinc-400 rounded-md transition-all`}>
      <div className={`h-full bg-belplit bg-opacity-60 rounded-md p-8 transition-all`}>
        <div className={`${view.mdView || view.lgView ? 'max-w-xl' : ''} mx-auto`} style={{height: 380}}>
          <Text className={`font-bold text-6xl max-w-md text-zinc-800 leading-tight`}>{text.ib4}</Text>
          <div className={`mt-8`}>
            <Text className={`mb-1 font-bold text-zinc-100 text-xl transition-all opacity-${state.opacity}`}>
              {msgs[curMsg][0]}
            </Text>
            <hr />
            <Text
              style={{ fontWeight: 300 }}
              className={`mt-2 bg-zinc-100 p-8 rounded-md text-black text-lg leading-5 tracking-normal transition-all opacity-${state.opacity}`}
            >
              {msgs[curMsg][1]}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
