const transform = (a) => {
  let res = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
  };
  let counter = 0;
  a.forEach((item, i) => {
    res[counter].push(item);
    if (counter === 7) {
      counter = counter - 7;
    } else {
      counter = counter + 1;
    }
  });
  console.log('🚀 res', res);
};

transform([
    880, 889, 910, 940, 910, 915, 949, 949, 
]);
ф = {
    '0': [ 880 ],
    '1': [ 889 ],
    '2': [ 910 ],
    '3': [ 940 ],
    '4': [ 910 ],
    '5': [ 915 ],
    '6': [ 949 ],
    '7': [ 949 ],
};
