
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './reducers/reducers';
import { AppEffects } from './effects/effects';

@NgModule({
  imports: [
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([AppEffects]),
  ],
})
export class AppStoreModule {}
