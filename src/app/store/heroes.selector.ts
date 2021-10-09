import {createSelector} from "@ngrx/store";
import {HeroesState} from "./heroes.reducer";

export const getState = (state)=> state.app
export const getHeroes = createSelector(getState, (s: HeroesState) => s.heroes)
export const getEditedHero = createSelector(getState, (s: HeroesState) => s.editedHero)
