import React from 'react';
import { Select, Button } from '../../lib';
import { Modal, ModalItems, FeedBack as FeedBackForm } from '..';

export default function Calculator(props) {
  const products = props.products.filter(({ name }) => name !== 'len');
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({
    status: 'orderonopen',
    header: ['Отправить запрос'],
  });
  const [region, setRegion] = React.useState(0);

  React.useEffect(() => {
    if (modalData.status === 'success') {
      setTimeout(() => {
        setModalOpen(false);
      }, 3000);
    }
    return;
  }, [modalData]);

  function openModal(msg) {
    const _msg = msg ? msg : '';
    setModalData({ status: 'orderonopen', header: ['Отправить запрос'], msg: [`${_msg}`] });
    setModalOpen(true);
  }
  const [state, setState] = React.useState({
    mark: props.initValues?.mark !== 7 ? props.initValues?.mark || 0 : 0,
    option: 0,
    size: 0,
    amount: 0,
  });
  const markSelect = products.map((item, index) => {
    return { title: item.title, value: item.id };
  });
  const sizeSelect = products[state.mark].sizes.map((item, i) => ({
    title: item.a + '*' + item.b + '*' + item.h + ' [мм] ' + products[state.mark].connectionTypes[i],
    value: i,
  }));

  // Regions
  const cities = ['Москва', 'СПБ', 'Казань', 'Краснодар', 'Ростов', 'Волгоград', 'Астрахань', 'Крым'];

  const ab = Object.entries(products.find(({ id }) => id.toString() === state.mark.toString()).prices).map((item, i) => {
    return [cities[i], item[0], item[1]];
  });
  // Показатели
  const h = products[state.mark].sizes[state.size].h / 1000;
  const a = products[state.mark].sizes[state.size].a / 1000;
  const b = products[state.mark].sizes[state.size].b / 1000;
  const price = products[state.mark].prices[ab[region][1]][state.size];
  console.log("🚀 ~ file: Calculator.js ~ line 53 ~ Calculator ~ price", products[state.mark].prices)
  const density = products[state.mark].density.replace('кг/м³', '');

  // площадь одного листа в м2
  const s = () => (a * b).toFixed(2);
  // количество листов
  const am = () => (state.amount / s());
  console.log("🚀 ~ file: Calculator.js ~ line 59 ~ Calculator ~ am", am())
  // объем
  const v = () => Math.ceil(am()) * s() * h;
  // вес
  const m = density * v();

  return (
    <>
      <div className={`rounded-md p-4 flex zero:flex-col md:flex-row w-full`}>
        <div className={`zero:w-full md:w-1/2  p-4 font-semibold`}>
          {/* MARK */}
          <label className={`text-zinc-800`}>Выберите марку</label>
          <div className={`py-2`}>
            <Select
              defaultValue={state.mark}
              id={`MARK`}
              items={markSelect}
              onChange={(e) => setState((s) => ({ ...s, size: 0,  mark: e.target.value }))}
            ></Select>
          </div>
          {/* H */}
          <label className={`text-zinc-800`}>Выберите толщину</label>
          <div className={`py-2`}>
            <Select
              id={`SIZE`}
              items={sizeSelect}
              onChange={(e) => setState((s) => ({ ...s,  size: e.target.value }))}
            ></Select>
          </div>
          {/* REGION */}
          <label className={`text-zinc-800`}>Выберите склад</label>
          <div className={`py-2`}>
            <Select
              defaultValue={region}
              items={ab.map((item, i) => ({ title: item[0], value: i }))}
              onChange={(e) => {
                setRegion(e.target.value);
              }}
            ></Select>
          </div>
          <div className={`flex flex-row justify-between gap-4 border-b pb-6`}>
            <div className={`basis-1/2 flex flex-col items-start relative`}>
              {/* INPUT */}
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
                <div className={`text-zinc-700  rounded-md font-light text-xl w-min`}>{s()}</div>
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
            {price * Math.ceil(am()) * s()}
            <span className={`text-lg`}> руб.</span>
          </div>
          <div className={`flex flex-wrap gap-6 mt-4`}>
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
                {v().toFixed(2)}
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
          <Button
            className={`bg-belplit_2 py-4 rounded-md text-white w-40 mt-10 text-xl uppercase font-bold hover:bg-belplit_dark hover:scale-105 transition-all active:scale-105`}
            onClick={(e) => {
              const msg = `Марка: ${products[state.mark].title}\r\nРазмеры: ${
                sizeSelect[state.size].title
              }\r\nСклад: ${cities[region]}\r\nКоличество: ${state.amount} [м²]\r\nСтоимость: ${
                price * state.amount
              } руб`;
              return openModal(msg);
            }}
          >
            Купить
          </Button>
        </div>
      </div>
      <Modal
        setOpen={modalOpen}
        setClose={() => setModalOpen(false)}
        header={
          <ModalItems.Header
            data={{ status: modalData.status, header: modalData.header, setClose: () => setModalOpen(false) }}
          />
        }
        body={
          <FeedBackForm
            onFulfilled={(a) => setModalData({ status: a, header: modalData.header })}
            body={modalData.msg}
          />
        }
      />
    </>
  );
}
