import { initServer } from './server';

if(process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

// dmp comment 4
initServer();
