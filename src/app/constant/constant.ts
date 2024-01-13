import {INavigation} from '../models/link.interface'

export const NAVIGATION_LINKS: INavigation [] = [
  {name: 'home', value: '/'},
  {name: 'users', value: 'users'}
];

export const GET_USERS_URL = 'https://jsonplaceholder.typicode.com/users';
export const EXCEPTIONS = {
  USER_ID_UNDEFINED: 'Card id is undefined'
};
export const PHONE_PATTERN = /^(\+[0-9]{1,4})?([-.\s]?[0-9]+)+$/;
export const FORM_MIN_VALUE = {
  NAME: 2,
  EMAIL: 6,
  PHONE: 6,
  USER_NAME: 4
};
