import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RpgWirzardComponent } from './rpg-wirzard/rpg-wirzard.component';
import { TileComponent } from './components/dumb/tile/tile.component';
import { StepperComponent } from './components/dumb/stepper/stepper.component';
import { StepComponent } from './components/dumb/step/step.component';
import { AppStoreModule } from './store/store.module';


@NgModule({
  declarations: [
    AppComponent,
    RpgWirzardComponent,
    TileComponent,
    StepperComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
