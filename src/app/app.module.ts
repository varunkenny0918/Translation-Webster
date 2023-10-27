import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DynamicJsonFileDirective } from './directives/dynamic-json-file.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { SkeletonModule } from 'primeng/skeleton';
// import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicJsonFileDirective,
    // TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    EditorModule,
    SkeletonModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
