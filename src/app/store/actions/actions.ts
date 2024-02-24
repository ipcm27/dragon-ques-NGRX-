// /app/store/app.actions.ts
import { createAction, props } from '@ngrx/store';

export const selectTile = createAction(
  '[Main] Select Class',
  props<{ className: string }>()
);
export const nextStep = createAction('[Main] Next Step');
export const previousStep = createAction('[Main] Previous Step');
