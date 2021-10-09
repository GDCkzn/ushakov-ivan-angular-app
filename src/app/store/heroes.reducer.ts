import {createReducer, on} from "@ngrx/store";
import {Hero} from "../hero";
import {addHero, deleteHero, editHero, editSave} from "./heroes.action";

export interface HeroesState {
  heroes: Hero[]
  editedHero?: Hero

}

export const initialState: HeroesState = {
  editedHero: undefined,
  heroes: [
    {id: 11, name: 'Dr Nice', ability: 'mega mind', side: 'dire', type: 'melee'},
    {id: 12, name: 'Narco', ability: 'mind control', side: 'radiant', type: 'range'},
    {id: 13, name: 'Bombasto', ability: 'regeneration', side: 'radiant', type: 'melee'},
    {id: 14, name: 'Celeritas', ability: 'strength', side: 'dire', type: 'melee'},
    {id: 15, name: 'Magneta', ability: 'time travel', side: 'radiant', type: 'range'},
    {id: 16, name: 'RubberMan', ability: 'fly', side: 'dire', type: 'range'},
    {id: 17, name: 'Dynama', ability: 'iron suit', side: 'radiant', type: 'melee'},
    {id: 18, name: 'Dr IQ', ability: 'web', side: 'radiant', type: 'range and melee'},
    {id: 19, name: 'Magma', ability: 'spirit form', side: 'dire', type: 'melee'},
    {id: 20, name: 'Tornado', ability: 'wheelchair', side: 'radiant', type: 'nope'}
  ]
}

export const heroesReducer = createReducer(
  initialState,
  on(addHero, (state, action) => {
    const arr = [...state.heroes, action.data]
    return {...state, heroes: arr}

  }),
  on(deleteHero, (state, action) => {
    const arr = state.heroes.filter(x => x !== action.data)
    return {...state, heroes: arr}   //"..." - spread оператор
  }),
  on(editHero, (state, action) => {
    return {...state, editedHero: action.data}
  }),
  on(editSave, (state, action) => {
    const index = state.heroes.findIndex(a => a.id === action.data.id)
    const newArr = [...state.heroes]
    newArr.splice(index, 1, action.data)
    return {...state, heroes: newArr}
  //   // const new1 = state.heroes.find(x => x.id === state.editedHero.id)
  //   // state.heroes.push(new1)
  //   // return {...state, editedHero: action.data}
  //   // return state.heroes.push.apply(state.heroes, state.editedHero)
  })

)
export function reducer(state : any, action : any) {
  return heroesReducer(state, action);
}

