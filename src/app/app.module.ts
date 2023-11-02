import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/Counter.module';
import { HeroesModule } from './heroes/Heroes.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';

//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    //HeroComponent,
    //ListComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
