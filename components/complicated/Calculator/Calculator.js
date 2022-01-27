import React from 'react';
import { Select } from '../../lib';

export default function Calculator({ products }) {
  const [state, setState] = React.useState({
    mark: 0,
    option: 0,
    size: 0,
    amount: 0,
  });
  const markSelect = products.map((item, index) => ({ title: item.title, value: index }));
  // const connetionTypes = products[state.mark].connetionType.   [
  //   { title: 'Прямая', value: 0 },
  //   { title: 'Шип-паз', value: 1 },
  //   { title: 'Ступень', value: 2 },
  // ];
  const sizeSelect = products[state.mark].sizes.map((item, i) => ({
    title: item.a + '*' + item.b + '*' + item.h + ' [мм]',
    value: i,
  }));
  const h = products[state.mark].sizes[state.size].h;
  const a = products[state.mark].sizes[state.size].a;
  const b = products[state.mark].sizes[state.size].b;
  const price = products[state.mark].prices.square[state.size];
  const density = products[state.mark].density[state.size].replace('кг/м³', '');

  const s = () => (a * b) / 1000000;
  const am = () => state.amount / s();
  const v = () => (am() * s() * h) / 1000;
  const m = density * v();

  return (
    <div className={`rounded-md p-4 flex zero:flex-col md:flex-row w-full`}>
      <div className={`zero:w-full md:w-1/2  p-4 font-semibold`}>
        <label className={`text-zinc-800`}>Выберите марку</label>
        <div className={`py-2`}>
          <Select
            id={`MARK`}
            items={markSelect}
            onChange={(e) => setState((s) => ({ ...s, mark: e.target.value }))}
          ></Select>
        </div>
        {/* <label>Выберите кромку</label>
        <div className={`py-2`}>
          <Select
            id={`OPTION`}
            items={connetionTypes}
            onChange={(e) => setState((s) => ({ ...s, option: e.target.value }))}
          ></Select>
        </div> */}
        <label className={`text-zinc-800`}>Выберите толщину</label>
        <div className={`py-2`}>
          <Select
            id={`SIZE`}
            items={sizeSelect}
            onChange={(e) => setState((s) => ({ ...s, size: e.target.value }))}
          ></Select>
        </div>
        <label className={`text-zinc-800`}>Выберите регион</label>
        <div className={`py-2`}>
          <Select items={[{ title: 'Москва', value: 0 }]}></Select>
        </div>
        {/* <div className={`my-2 bg-belplit_dark`} style={{ height: 1}} /> */}
        <div className={`flex flex-row justify-between gap-4 border-b pb-6`}>
          <div className={`basis-1/2 flex flex-col items-start relative`}>
            <div className={`absolute font-bold text-xl text-left text-zinc-800 whitespace-nowrap`}>
              Введите количество м²
            </div>
            <div className={`w-full mt-8`}>
              <input
                className={`border-2 border-belplit_dark rounded-md font-bold text-3xl w-full`}
                placeholder={state.amount}
                onChange={(e) => {
                  setState((s) => ({ ...s, amount: e.target.value }));
                }}
                type={`number`}
              />
            </div>
          </div>
          <div className={`basis-1/2 flex flex-col justify-end`}>
            <div className={`w-full flex `}>
              <div className={`text-zinc-700  rounded-md font-light text-xl w-min`}>
                {((a * b) / 1000000).toFixed(2)}
              </div>
              <span className={`text-lg font-light`}>&nbsp;м²</span>
            </div>
            <div className={`text-left text-zinc-800 -mb-5 whitespace-nowrap`}>Площадь листа</div>
          </div>
        </div>
      </div>
      <div className={`zero:w-full md:w-1/2 p-4 border-l bg-zinc-200 rounded-md`}>
        <div className={`w-full font-bold text-4xl py-2 border-b`}>Результат</div>
        <div className={`w-full`}>стоимость</div>
        <div className={`w-full font-bold text-5xl`}>
          {price * state.amount}
          <span className={`text-lg`}> руб.</span>
        </div>
        <div className={`flex gap-6 mt-4`}>
          <div className={`flex flex-col`}>
            <div className={`w-full`}>количество</div>
            <div className={`w-full font-bold text-5xl inline-flex items-end`}>
              {Math.ceil(am())}
              <span className={`text-lg`}> шт.</span>{' '}
            </div>
          </div>
          <div className={`flex flex-col`}>
            <div className={`w-full`}>объем</div>
            <div className={`w-full font-bold text-5xl inline-flex items-end`}>
              {v()}
              <span className={`text-lg`}> м³</span>
            </div>
          </div>
          <div className={`flex flex-col`}>
            <div className={`w-full`}>вес</div>
            <div className={`w-full font-bold text-5xl inline-flex items-end`}>
              {m.toFixed(0)}
              <span className={`text-lg`}> кг</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
