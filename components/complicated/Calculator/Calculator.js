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
  const optionSelect = [
    { title: 'Прямая', value: 0 },
    { title: 'Шип-паз', value: 1 },
    { title: 'Ступень', value: 2 },
  ];
  const sizeSelect = products[state.mark].sizes.map((item, i) => ({
    title: item.a + '*' + item.b + '*' + item.h + ' [мм]',
    value: i,
  }));
  const height = products[state.mark].sizes[state.size].h;
  const a = products[state.mark].sizes[state.size].a;
  const b = products[state.mark].sizes[state.size].b;

  const price = products[state.mark].prices.square[state.size];

  const density = products[state.mark].density[state.size].replace('кг/м³', '');

  return (
    <div className={`rounded-md m-4 flex`}>
      <div className={`w-1/2 p-4`}>
        <label>Выберите марку</label>
        <div className={`py-2`}>
          <Select
            id={`MARK`}
            items={markSelect}
            onChange={(e) => setState((s) => ({ ...s, mark: e.target.value }))}
          ></Select>
        </div>
        <label>Выберите кромку</label>
        <div className={`py-2`}>
          <Select
            id={`OPTION`}
            items={optionSelect}
            onChange={(e) => setState((s) => ({ ...s, option: e.target.value }))}
          ></Select>
        </div>
        <label>Выберите толщину</label>
        <div className={`py-2`}>
          <Select
            id={`SIZE`}
            items={sizeSelect}
            onChange={(e) => setState((s) => ({ ...s, size: e.target.value }))}
          ></Select>
        </div>
        <label>Выберите регион</label>
        <div className={`py-2`}>
          <Select></Select>
        </div>
        <div className={`flex`}>
          <div className={`basis-1/2 flex flex-col`}>
            <div>Введите количество м2</div>
            <div className={`py-2 w-1/2`}>
              <input
                className={`border rounded-md font-bold text-xl`}
                placeholder={state.amount}
                onChange={(e) => setState((s) => ({ ...s, amount: e.target.value }))}
              />
            </div>
          </div>
          <div className={`basis-1/2 flex flex-col`}>
            <div>Площадь листа м2</div>
            <div className={`py-2`}>
              <div
                className={`border rounded-md font-bold text-xl`}
              >
                {(a*b/1000000).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-1/2 p-4`}>
        <div className={`w-full font-bold texl-2xl py-2`}>Результат</div>
        <div className={`w-full`}>стоимость</div>
        <div className={`w-full font-bold text-5xl`}>
          {price * state.amount}
          <span className={`text-lg`}> руб.</span>
        </div>
        <div className={`w-full`}>количество</div>
        <div className={`w-full font-bold text-5xl`}>{Math.ceil(state.amount/(a*b/1000000))}<span className={`text-lg`}> шт.</span>  </div>
        <div className={`w-full`}>объем</div>
        <div className={`w-full font-bold text-5xl`}>{(state.amount * height * 0.001).toFixed(2)}<span className={`text-lg`}> м³</span></div>
        <div className={`w-full`}>вес</div>
        <div className={`w-full font-bold text-5xl`}>{(state.amount * height * 0.01 * density).toFixed(0)}<span className={`text-lg`}> кг</span></div>
      </div>
    </div>
  );
}
