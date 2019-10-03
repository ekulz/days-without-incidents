// create-react-app sets the NODE_ENV to production during an npm run build
const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:5000' : 'https://days-without-incidents-api.inside.xero-support.com';