export const normalizeData = (inputArr, appArr) => {
  let arr = [];
  return inputArr
    .map((item) => ({
      title: item.options.find(({ key }) => key === 'Серия').value,
      sizes: {
        a: parseInt(item.options.find(({ key }) => key === 'Длина').value.replace(' мм', '')),
        b: parseInt(item.options.find(({ key }) => key === 'Ширина').value.replace(' мм', '')),
        h: parseInt(item.options.find(({ key }) => key === 'Толщина').value.replace(' мм', '')),
      },
      connectionType: item.options.find(({ key }) => key === 'Вид кромки').value,
      prices: item.cost,
      priceFor: item.unit,
      density: item.options.find(({ key }) => key === 'Плотность').value,
      show: item.visible,
      articles: item.article,
      ids: item.id,
      coef: item.coef,
    }))
    .sort((a, b) => {
      return a.title === b.title ? 0 : a.title < b.title ? -1 : 1;
    })
    .reduce((pre, cur, i) => {
      if (cur.title === pre.title || cur.title === pre.reverse()[0]?.title) {
        if (i === inputArr.length - 1) {
          arr.push(Array.prototype.concat(cur, pre));
          return arr;
        } else {
          return Array.prototype.concat(cur, pre);
        }
      } else {
        arr.push(pre);
        return cur;
      }
    })
    .map((item) =>
      item
        .sort((a, b) => a.sizes.h - b.sizes.h || a.sizes.a - b.sizes.a || a.sizes.b - b.sizes.b)
        .reduce(
          (pre, cur) => {
            pre.sizes.push(cur.sizes);
            pre.prices.push(cur.prices);
            pre.density.push(cur.density);
            pre.connectionType.push(cur.connectionType);
            pre.priceFor.push(cur.priceFor);
            pre.show.push(cur.show);
            pre.articles.push(cur.articles);
            pre.ids.push(cur.ids);
            pre.coef.push(cur.coef);
            return pre;
          },
          {
            title: item[0].title,
            sizes: [],
            prices: [],
            density: [],
            connectionType: [],
            priceFor: [],
            show: [],
            articles: [],
            ids: [],
            coef: [],
          }
        )
    )
    .reduce((pre, cur, i) => {
      let index = null;
      let temp = pre.find((item, curI) => {
        if (item.name === cur.title.toLowerCase()) {
          index = curI;
          return true;
        }
      });
      if (temp) {
        temp.density = cur.density;
        temp.sizes = cur.sizes;
        temp.connectionType = cur.connectionType;
        temp.prices = {
          bar: cur.prices.map((item, i) => {
            return item * cur.coef[i];
          }),
          square: cur.prices,
        };
        pre.splice(index, 1, temp);
      }
      return pre;
    }, appArr);
};

export const v1 = (inputArr) => {
  // console.log("🚀 ~ file: functions.js ~ line 91 ~ normalizeDataSTUPID ~ inputArr", inputArr)
  return inputArr.map((inputArrItem) => {
    let tmpSizes = inputArrItem.sizes.map((tmpSizesItem) => {
      return tmpSizesItem[0]?.slice(0, tmpSizesItem[0].indexOf('мм')).split(/х|x/);
    });
    let connectionTypes = inputArrItem.sizes.map((tmpSizesItem) => {
      return tmpSizesItem[0]?.slice(tmpSizesItem[0].indexOf('(') + 1, tmpSizesItem[0].indexOf(')'));
    });
    let tmpSizes2 = tmpSizes.map((tmpSizes2Item) => ({
      a: parseInt(tmpSizes2Item[0].replace(' ', '')),
      b: parseInt(tmpSizes2Item[1].replace(' ', '')),
      h: parseInt(tmpSizes2Item[2].replace(' ', '')),
    }));
    inputArrItem.sizes = tmpSizes2;
    inputArrItem.connectionTypes = connectionTypes;
    return inputArrItem;
  });
};

export const v2 = (input) => {
  const setPrices = (input_i, count) => {
    console.log('🚀 ~ file', input_i);
    return input_i.filter((item_ii, iii) => {
      console.log('🚀 ~ == count', iii !== count);
      if (iii === count) {
        return false
      } else {
        return true
      }
    });
  }; 0

  return input.map((item) => {
    let count = null;
    return {
      ...item,
      sizes: item.sizes.filter((item_i, ii) => {
        if (item_i.show !== true) {
          count = ii;
          return false;
        } else {
          return true;
        }
      }),
      prices: {
        square: setPrices(item.prices.square, count),
        spb: setPrices(item.prices.spb, count),
        kazan: setPrices(item.prices.kazan, count),
        krasnodar: setPrices(item.prices.krasnodar, count),
        rostov: setPrices(item.prices.rostov, count),
        volvograd: setPrices(item.prices.volvograd, count),
        astrahan: setPrices(item.prices.astrahan, count),
        сrimea: setPrices(item.prices.сrimea, count),
      },
    };
  });
};

function v3(input) {
  console.log('🚀 ~ file: ProductList.js ~ line 1112 ~ v3 ~ input', input[0]);
  return input.map((item) => ({
    id: item.id,
    info: { slug: item.name, position: item.position, displayName: item.displayName, title: item.title },
    options: item.sizes.map((item_i, ii) => {
      return {
        ...item_i,
        prices: Object.entries(item.prices).map((item_ii) => ({
          city: item_ii[0] === 'сrimea' ? 'crimea' : item_ii[0],
          value: item_ii[1][ii],
        })),
        coef: parseFloat((((item_i.a / 1000) * item_i.b) / 1000).toFixed(4)),
        connectonType: item.connectionTypes[ii],
        density: parseInt(item.density.replace(' кг/м³', '')),
      };
    }),
    desc: Object.entries(item.desc).map((item_iii) => ({
      title: item_iii[0],
      value: item_iii[1],
    })),
  }));
}