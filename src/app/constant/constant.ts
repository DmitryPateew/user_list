import {INavigation} from '../models/link.interface'

export const NAVIGATION_LINKS: INavigation [] = [
  {name: 'home', value: '/'},
  {name: 'users', value: 'users'}
];

export const GET_USERS_URL = 'https://jsonplaceholder.typicode.com/users';
export const EXCEPTIONS = {
  USER_ID_UNDEFINED: 'Card id is undefined',
  LOCAL_STORAGE_UNDEFINED: 'Value by key in Local storage does not find',
  UPDATE_LOCAL_STORAGE_ERROR: 'Error update local storage:'
};

export const LOCAL_STORAGE_USERS_KEY = 'users';
export const PHONE_PATTERN = /^(\+[0-9]{1,4})?([-.\s]?[0-9]+)+$/;
export const FORM_MIN_VALUE = {
  NAME: 2,
  EMAIL: 6,
  PHONE: 6,
  USER_NAME: 4
};

export const EDIT_ADD_BUTTON_NAME = {
  EDIT: 'Edit user',
  ADD: 'Add new user'
}

export const USERS_SELECTOR = 'users';
