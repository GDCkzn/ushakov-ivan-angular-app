import {createAction, props} from "@ngrx/store";
import {Hero} from "../hero";

export const addHero = createAction('[Heroes Component] Add', props<{data: Hero}>());
export const editHero = createAction('[Heroes Component] Edit', props<{data: Hero}>());
export const deleteHero = createAction('[Heroes Component] Delete', props<{data: Hero}>());
export const editSave = createAction('[Heroes Component] EditSave', props<{data: Hero}>());

