import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    name: 'Borracharia',
    imageUrl: '/images/products/product_1.png',
    updatedAt: moment().subtract(2, 'moths')
  }
];
