import {createContext} from 'react';
import {MyAppContext} from '../';

const defaultAuth = {
  user: undefined,
  access: false,
  redirect: undefined,
  isPublic: false,
};


const Context = createContext<MyAppContext>(defaultAuth);

export default Context;
