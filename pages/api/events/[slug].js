// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { events } = require('./data.json');
const _filter = require('lodash/filter');

export default (req, res) => {
  const evt = _filter(events, {
    slug: req?.query?.slug,
  });
  if (req?.method === 'GET') {
    res.status(200).json(evt);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req?.method} not allowed.` });
  }
};
