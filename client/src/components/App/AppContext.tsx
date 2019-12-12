import React from 'react';
import { store } from '../../store';

export function createStores() {
  return { store: new store() };
}

export const stores = createStores();

export const AppContext = React.createContext(stores);
