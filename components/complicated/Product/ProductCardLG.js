import React from 'react';
import { Text } from '../../lib';
import { PopUp } from '../../complicated';

export default function ProductCardLG(props) {
  const {
    title,
    files,
    id,
    sizes,
    prices,
    desc: { consists, options, advantages, functions },
  } = props.product;
  const [index, setIndex] = React.useState(0);

  return (
    <div className={`w-full max-w-6xl mx-auto relative flex-col items-center justify-center border`}>
      <Text ta={'center'} ts={'xl'}>{title}</Text>
      <div className={`shadow-md mx-auto`}>
        <img src={`/images/products/sm/${files.avatarSM}`} alt={`${title} logo`} />
      </div>
      <div>
        <Text>Размеры:</Text>
        {sizes.map((item, index) => (
          <div key={`PS${index}`}>
            <input
              type='radio'
              id={`ProductSize${index}`}
              name={`productSize`}
              value={index}
              onChange={() => setIndex(index)}
            />
            <label className={`font-light`} htmlFor={`ProductSize${index}`}>
              {item}
            </label>
          </div>
        ))}
      </div>
      <div>
        <Text>Цена:</Text>
        <div className={`flex gap-1`}>
          <Text>плита:</Text>
          <Text tw={'bold'}>{prices.bar[index]}</Text>
          <Text>руб.</Text>
          <Text>кв.м:</Text>
          <Text tw={'bold'}>{prices.square[index]}</Text>
          <Text>руб.</Text>
        </div>
      </div>
      <Text
        mx={'auto'}
        px={2}
        py={2}
        ta={'center'}
        tc={'white'}
        tw={'bold'}
        extraClasses={`bg-green-600 max-w-xs`}
      >
        Купить
      </Text>
      {[
        [consists, 'Состав'],
        [options, 'Область применения'],
        [advantages, 'Преимущества'],
        [functions, 'Функции'],
      ].map((item, index) => {
        return <PopUp title={item[1]} arr={item[0]} key={`POPUP${index}`} />;
      })}
      <img src={`/images/products/techDesc/${files.techDesc}`} alt={`${title} logo`} />
    </div>
  );
}
