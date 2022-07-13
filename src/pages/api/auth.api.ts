/* eslint-disable no-console */
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  console.log('request: api/auth/');
  res.setHeader('WWW-authenticate', 'Basic realm="Secure Area"');
  res.statusCode = 401;
  res.end(`Auth Required.`);
}
