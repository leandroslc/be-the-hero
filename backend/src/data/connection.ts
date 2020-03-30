import knex from 'knex';
import config from '../config/data';
import env from '../config/env';

let configuration;

if (env.isDevelopment()) {
  configuration = config.development;
} else if (env.isTesting()) {
  configuration = config.test;
} else {
  throw `No database configuration found for environiment '${env.name}'`;
}

export default knex(configuration);
