import React from 'react';

export default function ProductsSetter() {
  const [data, setData] = React.useState([]);
  const [newData, setNewData] = React.useState([]);
  const [selectedCity, setSelectedCity] = React.useState(0);
  //   console.log('🚀 ~ file: ProductsSetter.js ~ line 5 ~ ProductsSetter ~ data', selectedCity, data);
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
  const _data = data;

  const handleDataChange = (e, { productPos, size }) => {
    e.preventDefault();
    const _prices = data[productPos].prices[cities[selectedCity][1]];
    const _product = data[productPos];
    const newPrices = _prices.splice(size, 1, parseInt(e.target.value));
    _product.prices[cities[selectedCity][1]] = newPrices;
    console.log('🚀 ~ file: ProductsSetter.js ~ line 23 ~ handleDataChange ~ _prices', newPrices, _prices);
    _data;
  };

  React.useEffect(() => {
    fetch('api/prices')
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>ProductsSetter</h1>
      <div className={`flex`}>
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
      <div>
        {data.map((item, i) => {
          return (
            <div key={`lfjkh${i}`}>
              <div className={`font-bold`}>{item.title}</div>
              <div>
                {item.sizes.map((item_i, ii) => {
                  return (
                    <div key={`sdjkfhs${ii}`} className={`flex font-light`}>
                      <div className={`w-60 text-right`}>{item_i}</div>
                      <div className={`mx-2 font-bold`}>
                        {item.prices[cities[selectedCity][1]]?.[ii]
                          ? item.prices[cities[selectedCity][1]][ii]
                          : ' - '}
                      </div>
                      <input
                        type={'number'}
                        className={`border rounded-md`}
                        onChange={(e) => handleDataChange(e, { productPos: i, size: ii })}
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
      </div>
    </div>
  );
}
