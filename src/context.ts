import {createContext} from 'react';
import {UserState} from '../';

const defaultAuth = {
  user: undefined,
  access: false,
  redirect: undefined,
  isPublic: false,
};


const Context = createContext<UserState>(defaultAuth);

export default Context;
