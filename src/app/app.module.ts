import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{MaterialModule} from './material';

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { CapstoneComponent } from './capstone/capstone.component';


const appRoutes: Routes = [
  {path:'about',} 
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectComponent,
    ContactComponent,
    CapstoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
