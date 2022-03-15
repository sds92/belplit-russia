import fs from 'fs';

const f = (input) => {
  let products = [];
  fs.readFile('./f/products.json', 'utf8', (err, data) => {
    if (err) throw err;
    products = JSON.parse(data);
    // res.json(JSON.stringify(products));
    let a = products.map((inputArrItem) => {
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
          show: true
        }));
        inputArrItem.sizes = tmpSizes2;
        inputArrItem.connectionTypes = connectionTypes;
        return inputArrItem;
      });
    let b = a.map(item => {
        return {...item, desc: {...item.desc, tech: item.desc.tech.map(item_i => {
            return {title: item_i[0], value: item_i[1]}
        })}}
    })
    console.log(a[0].desc);
    fs.writeFile(`./f/products2.json`, JSON.stringify(b), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
  });
};
f();
