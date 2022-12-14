import { applyMiddleware, createStore } from 'redux'
import reducers from '@/state/reducers'
import thunk from 'redux-thunk'
import { loadState, saveState } from '@/infra/cache';
import { State } from '@/data/models';

const persistedState: State | object  = loadState()

export const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState(store.getState());
});
