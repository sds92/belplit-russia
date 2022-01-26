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
  const h = products[state.mark].sizes[state.size].h;
  const a = products[state.mark].sizes[state.size].a;
  const b = products[state.mark].sizes[state.size].b;
  const price = products[state.mark].prices.square[state.size];
  const density = products[state.mark].density[state.size].replace('кг/м³', '');

  const s = () => (a * b) / 1000000;
  const am = () => state.amount / s();
  const v = () => (am() * s() * h) / 1000;
  const m = density * v();

  const handleChange = (e) => {
    if (typeof e.target.value !== 'number') {
      setState((s) => ({ ...s, alert: true }));
      setTimeout(() => {
        setState((s) => ({ ...s, alert: false }));
      }, 3000);
    } else {
      setState((s) => ({ ...s, amount: e.target.value }));
    }
  };
  console.log('🚀 ~ file: Calculator.js ~ line 81 ~ Calculator ~ typeof state.amount', typeof state.amount);

  return (
    <div className={`rounded-md p-4 flex w-full`}>
      <div className={`w-1/2 p-4 font-semibold`}>
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
          <Select items={[{ title: 'Москва', value: 0 }]}></Select>
        </div>
        <div className={`flex zero:flex-col sm:flex-row`}>
          <div className={`basis-1/2 flex flex-col order-2`}>
            <div className={`font-bold`}>Введите количество м²</div>
            <div className={`zero:py-2 sm:py-0 sm:w-1/2`}>
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
          <div className={`basis-1/2 flex flex-col order-1`}>
            <div>Площадь листа м²</div>
            <div className={`py-2`}>
              <div className={`rounded-md font-bold text-xl`}>{((a * b) / 1000000).toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-1/2 p-4 border-l border-belplit_dark`}>
        <div className={`w-full font-bold text-3xl py-2`}>Результат</div>
        <div className={`w-full`}>стоимость</div>
        <div className={`w-full font-bold text-5xl`}>
          {price * state.amount}
          <span className={`text-lg`}> руб.</span>
        </div>
        <div className={`w-full`}>количество</div>
        <div className={`w-full font-bold text-5xl`}>
          {Math.ceil(am())}
          <span className={`text-lg`}> шт.</span>{' '}
        </div>
        <div className={`w-full`}>объем</div>
        <div className={`w-full font-bold text-5xl`}>
          {v()}
          <span className={`text-lg`}> м³</span>
        </div>
        <div className={`w-full`}>вес</div>
        <div className={`w-full font-bold text-5xl`}>
          {m.toFixed(0)}
          <span className={`text-lg`}> кг</span>
        </div>
      </div>
    </div>
  );
}
