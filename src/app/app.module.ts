import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RepositoryModule } from './repository/repository.mudule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RepositoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
