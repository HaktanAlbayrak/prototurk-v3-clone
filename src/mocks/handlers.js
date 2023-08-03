import { rest } from 'msw';
import { categories } from '~/fake-api';

export const handlers = [
  rest.get(import.meta.env.VITE_API_URL + '/categories', (req, res, ctx) =>
    res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json(categories)
      // ctx.status(400),
      // ctx.json({
      //   message: 'Something went wrong',
      // })
    )
  ),

  // Handles a Get /user request
  rest.get('/user', null),
];
