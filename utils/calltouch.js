const mongoose = require('mongoose');
const axios = require('axios').default;
const Conditions = require('../models/conditions');
const Orders = require('../models/orders');
const qs = require('qs')


const CT_CREATE_URL = 'https://api.calltouch.ru/lead-service/v1/api/client-order/create';
const CT_UPDATE_URL = 'https://api.calltouch.ru/lead-service/v1/api/client-order/update';
const CT_DELETE_URL = 'https://api.calltouch.ru/lead-service/v1/api/client-order/delete';
const CT_CALLS_URL =
  'https://api.calltouch.ru/calls-service/RestAPI/requests/' +
  process.env.CT_SITEID +
  '/register/'

const ctAPIOptions = (url, data) => ({
  headers: {
    'Access-Token': `${process.env?.CT_ACCESS_TOKEN}`,
    SiteId: `${process.env?.CT_SITEID}`,
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
  method: 'post',
  data: JSON.stringify(data),
  url: url,
});

const ctAPIOptions2 = (url, data) => ({
  headers: {
    'Access-Token': `${process.env.CT_ACCESS_TOKEN}`,
    SiteId: `${process.env.CT_SITEID}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  method: 'post',
  data: JSON.stringify(data),
  url: url
})

async function post(options) {
  await axios(options)
    .then(function (response) {
      console.log(`calltouch success ${response.data.data}`);
    })
    .catch(function (error) {
      console.log('err calltouch', error.response);
    });
  return;
}

const calltouch = {
  date: (inputDate) => {
    let date = new Date(inputDate);
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();
    let hoars = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();

    if (day.length !== 2) {
      day = '0' + day;
    }
    if (month.length !== 2) {
      month = '0' + month;
    }
    if (hoars.length !== 2) {
      hoars = '0' + hoars;
    }
    if (minutes.length !== 2) {
      minutes = '0' + minutes;
    }
    if (seconds.length !== 2) {
      seconds = '0' + seconds;
    }

    return `${day}-${month}-${year} ${hoars}:${minutes}:${seconds}`;
  },
  build: async (data, flag) => {
    let _data = data.length ? data : [data];    
    const statuses = await Conditions.find().lean();
    switch (flag) {
      case 'new': {
        return {
          crm: 'csk',
          orders: _data.map((order) => ({
            matching: [{ type: 'withoutSource' }],
            orderNumber: order.number,
            status: statuses.find((item) => item._id.toString() === order.status.toString()).value,
            statusDate: calltouch.date(order.updatedAt),
            orderDate: calltouch.date(order.created),
            currency: `rub`,
            revenue: order.sum,
            margin: order.profit,
            manager:
              order.manager[0]?.surname + ' ' + order.manager[0]?.name + ' ' + order.manager[0]?.lastname,
            comment: { text: order?.manager_comment || 'нет комментария' },
            products: order.products.map((p) => ({
              name: p.title,
              price: p.cost,
              quantity: p.quantity,
            })),
          })),
        };
      }
      case 'upd': {
        return {
          orders: _data.map((order) => ({
            matching: [{ type: 'withoutSource' }],
            orderNumber: order.number,
            status: statuses.find(({ _id }) => _id.toString() === order.status.toString()).value,
            statusDate: calltouch.date(order.updatedAt),
            orderDate: calltouch.date(order.created),
            updateDate: calltouch.date(order.updatedAt),
            currency: `rub`,
            revenue: order.sum,
            margin: order.profit,
            manager:
              order.manager[0]?.surname + ' ' + order.manager[0]?.name + ' ' + order.manager[0]?.lastname,
            comment: { text: order?.manager_comment || 'нет комментария' },
            products: order.products.map((p) => ({
              name: p.title,
              price: p.cost,
              quantity: p.quantity,
            })),
          })),
        };
      }

      default:
        break;
    }
  },
  buildFormData: async (props) => {
    return qs.stringify({
      fio: props.fio,
      phoneNumber: props.phoneNumber,
      email: props.email,
      subject: props.subject,
      tags: props.tags,
      requestUrl: props.requestUrl
    })
  }
};

module.exports = {
  newOrder: async (data) => {
    return await calltouch
      .build(data, 'new')
      .then((res) => post(ctAPIOptions(CT_CREATE_URL, res)))
      .catch((err) => console.log(err));
  },
  updOrder: async (data) => {
    return calltouch
      .build(data, 'upd')
      .then((res) => post(ctAPIOptions(CT_UPDATE_URL, res)))
      .catch((err) => console.log(err));
  },
  delOrder: async (data) => {
    const _ids = data.map((_id) => mongoose.Types.ObjectId(_id));
    const _ordersToDel = await Orders.aggregate([
      {
        $match: {
          _id: { $in: _ids },
        },
      },
    ]);
    return post(ctAPIOptions(CT_DELETE_URL, { orderNumbers: _ordersToDel.map((o) => o.number.toString()) }));
  },
  sendFormData: async (data) => {
    return await calltouch
      .buildFormData(data)
      .then((res) => post(ctAPIOptions2(CT_CALLS_URL, res)))
      .catch((err) => console.log(err));
  }
};

// const a = {
//   _id: '625d0b07622c101670f80f71',
//   oneC: [Object],
//   created: '2022-04-15T20:06:37.000Z',
//   buyed: null,
//   sum: 46281,
//   deliverySum: null,
//   deliveryRequest: null,
//   shippedSum: 0,
//   typeDelivery: 'pickup',
//   deliver: null,
//   comment: '',
//   payment: 'cash',
//   paymentStatus: null,
//   manager: [Array],
//   delivery: null,
//   acquiringNum: '260cc0b14b10450ba4ab2a718b8dc00b',
//   products: [],
//   region: [Object],
//   status: [Object],
//   number: 2442,
//   numberuid: '7841b976-9ecf-40ec-8d69-361db02234ac',
//   client: [Object],
//   createdAt: '2022-04-18T06:54:00.049Z',
//   updatedAt: '2022-04-19T06:32:58.184Z',
//   __v: 0,
//   declainReason: 'ЮР.ЛИЦ',
//   deleted: false,
//   profit: 0,
//   manager_comment: 'реал ТДЦ00292725\nюр.лицо',
//   truePhoneStageOne: '+79037433225',
//   truePhone: '79037433225'
// },
// const calltouchData = {
//   crm: 'csk',
//   orders: [],
// };

// const axiosOptions = (data) => ({
//   headers: {
//     'Access-Token': `${process.env.CALLTOUCH_ACCESS_TOKEN}`,
//     SiteId: `${process.env.CALLTOUCH_SITEID}`,
//     Accept: 'application/json, text/plain, */*',
//     'Content-Type': 'application/json',
//   },
//   method: 'post',
//   data: JSON.stringify(data),
//   url: 'https://api.calltouch.ru/lead-service/v1/api/client-order/create',
// });

// const createDateString = (dateIn) => {
//   let date = new Date(dateIn);
//   let day = date.getDate().toString();
//   let month = (date.getMonth() + 1).toString();
//   let year = date.getFullYear().toString();
//   let hoars = date.getHours().toString();
//   let minutes = date.getMinutes().toString();
//   let seconds = date.getSeconds().toString();

//   if (day.length !== 2) {
//     day = '0' + day;
//   }
//   if (month.length !== 2) {
//     month = '0' + month;
//   }
//   if (hoars.length !== 2) {
//     hoars = '0' + hoars;
//   }
//   if (minutes.length !== 2) {
//     minutes = '0' + minutes;
//   }
//   if (seconds.length !== 2) {
//     seconds = '0' + seconds;
//   }

//   return `${day}-${month}-${year} ${hoars}:${minutes}:${seconds}`;
// };

// const sendData = (options) => {
//   axios(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.log(error.response.data.data.validationErrorData);
//     });
// };
// module.exports.sendNewOrder = async (order) => {};

// module.exports.sendAllOrders = async (orders) => {
//   calltouchData.orders = orders.map((item) => {
//     return {
//       matching: [{ type: 'withoutSource' }],
//       orderNumber: item.number,
//       funnel: '?',
//       status: item.status.value,
//       statusDate: createDateString(item.updatedAt),
//       orderDate: createDateString(item.created),
//       currency: `rub`,
//       revenue: item.sum,
//       margin: 0,
//       manager: item.manager[0]?.surname + ' ' + item.manager[0]?.name + ' ' + item.manager[0]?.lastname,
//       comment: { text: item.comment || 'без комментария' },
//       products: item.products.map((p) => ({
//         name: p.title,
//         price: p.cost,
//         quantity: p.quantity,
//       })),
//     };
//   });
//   sendData(axiosOptions(calltouchData));
// };

// const calltouchOrder = {
//   matching: [{ type: 'withoutSource' }],
//   orderNumber: null,
//   funnel: '',
//   status: '',
//   statusDate: '',
//   orderDate: '',
//   currency: '',
//   revenue: '',
//   margin: '',
//   orderLink: '',
//   orderName: '',
//   manager: '',
//   comment: { text: '' },
//   addTags: [],
//   addTagsToLead: [],
//   customFields: [],
//   products: [],
// };
// const calltouchProduct = {
//   name: '',
//   price: null,
//   brand: '',
//   category: '',
//   variant: '',
//   quantity: null,
// };
