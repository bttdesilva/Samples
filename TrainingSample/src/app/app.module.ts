import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training.component';
import { TrainingService } from './training/training.service';

@NgModule({
  imports: [BrowserModule, FormsModule,
    HttpModule, ],
  declarations: [AppComponent, TrainingComponent ],
  bootstrap: [AppComponent],
  providers: [TrainingService]
})
export class AppModule { }
