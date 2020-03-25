import knex from 'knex';
import config from '../config/data';

export default knex(config.development);
