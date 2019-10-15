import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToysComponent } from './toys/toys.component';
import { ToyDetailComponent } from './toy-detail/toy-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToysComponent,
	ToyDetailComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
