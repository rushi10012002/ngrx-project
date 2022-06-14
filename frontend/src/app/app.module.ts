import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './Reducers/counter.reducers';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http'
import {EffectsModule} from '@ngrx/effects'
import { MOvieEffects } from './Effects/Movies.effect';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,StoreModule.forRoot({ count: counterReducer,count1: counterReducer }),  StoreDevtoolsModule.instrument({
     
    }),HttpClientModule,EffectsModule.forRoot([MOvieEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
