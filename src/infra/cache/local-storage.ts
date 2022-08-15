import { State } from "@/data/models";

export const loadState = (): State | Array<object> => {
  const localState = localStorage.getItem('state')

  if (localState === null) return []

  return JSON.parse(localState)
}; 

export const saveState = (state: State) => {
  const localState = JSON.stringify(state)
  localStorage.setItem('state', localState)
}
