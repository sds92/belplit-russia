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

transform(JSON.parse('[460	455	500	486	535	497	550	486	535	487	536	500	550	500	550]'.replaceAll('	', ',')));
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