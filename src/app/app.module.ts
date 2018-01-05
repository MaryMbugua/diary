import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DiaryFormComponent } from './diary-form/diary-form.component';
import { DiaryComponent } from './diary/diary.component';


@NgModule({
  declarations: [
    AppComponent,
    DiaryFormComponent,
    DiaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
