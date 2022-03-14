import React from 'react';

export default function ProductsSetter() {
  const [data, setData] = React.useState([]);
  const [newData, setNewData] = React.useState([]);
  const [dataToSend, setDataToSend] = React.useState([]);
  const [selectedCity, setSelectedCity] = React.useState(0);
  const cities = [
    ['Москва', 'square'],
    ['СПБ', 'spb'],
    ['Казань', 'kazan'],
    ['Краснодар', 'krasnodar'],
    ['Ростов', 'rostov'],
    ['Волгоград', 'volvograd'],
    ['Астрахань', 'astrahan'],
    ['Крым', 'сrimea'],
  ];

  const handleDataChange = (a, e) => {
    const _data = JSON.parse(JSON.stringify(newData));
    e.preventDefault();

    const _prices = _data[a.productPos].prices[cities[selectedCity][1]];
    if (a.value) {
      // set new value
      _prices.splice(a.size, 1, parseInt(a.value));
    } else {
      // else set old value
      _prices.splice(a.size, 1, data[a.productPos].prices[cities[selectedCity][1]][a.size]);
    }
    const _product = _data[a.productPos];
    _product.prices[cities[selectedCity][1]] = _prices;

    setNewData(_data);
    return;
  };

  const getPrices = () => {
    fetch('api/prices')
      .then((res) => res.json())
      .then((res) => {
        setData(JSON.parse(JSON.stringify(res)));
        setNewData(JSON.parse(JSON.stringify(res)));
      })
      .catch((err) => console.log(err));
  };

  const save = async () => {
    await fetch(`api/prices`, {
      method: 'POST',
      // headers: {
      //   Accept: 'application/json, text/plain, */*',
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'ok') {
          getPrices();
        }
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getPrices();
  }, []);

  return (
    <div>
      <hr />
      <div className={`flex flex-wrap justify-center py-1 bg-zinc-100`}>
        {cities.map((item, i) => {
          return (
            <div
              key={`asdf${i}`}
              className={`${
                selectedCity === i ? `bg-belplit_2 shadow-md` : ``
              } mx-1 px-2 cursor-pointer rounded-md`}
              onClick={() => setSelectedCity(i)}
            >
              {item[0]}
            </div>
          );
        })}
      </div>
      <hr />
      <div className={``}>
        {cities.map((item_iii, iii) => {
          return (
            <div key={`asjdifh${iii}`}>
              {cities[selectedCity][1] === item_iii[1] && (
                <>
                  <div className={`flex bg-zinc-100`}>
                    <div className={`w-60 text-right px-4`}>размер</div>
                    <div className={`w-16 text-center mx-2`}>текущая цена</div>
                    <div className={`w-16 text-center`}>новая цена</div>
                    <div
                      onClick={() => save()}
                      className={`ml-10 bg-belplit_2 self-center px-2 py-1 rounded-md shadow-md hover:bg-belplit_dark hover:text-zinc-100 cursor-pointer `}
                    >
                      Сохранить
                    </div>
                  </div>
                  <hr />
                  {data.map((item, i) => {
                    return (
                      <div key={`lfjkh${i}`}>
                        <div className={`ml-10 font-bold`}>{item.title}</div>
                        <div>
                          {item.sizes.map((item_i, ii) => {
                            return (
                              <div key={`sdjkfhs${ii}`} className={`flex font-light`}>
                                <div className={`w-60 text-right`}>{item_i}</div>
                                <div className={`w-16 text-center mx-2 font-bold`}>
                                  {item.prices[cities[selectedCity][1]]?.[ii]
                                    ? item.prices[cities[selectedCity][1]][ii]
                                    : ' - '}
                                </div>
                                <input
                                  type={'number'}
                                  className={`border rounded-md w-16`}
                                  onChange={(e) =>
                                    handleDataChange({ productPos: i, size: ii, value: e.target.value }, e)
                                  }
                                  // value={newData.length !== 0 && newData?.[i].prices[cities[selectedCity][1]][ii]}
                                  placeholder={
                                    item.prices[cities[selectedCity][1]]?.[ii]
                                      ? item.prices[cities[selectedCity][1]][ii]
                                      : ' - '
                                  }
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

