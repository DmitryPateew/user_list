import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './core/user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderComponent} from "./core/layout/header/header.component";
import {FooterComponent} from "./core/layout/footer/footer.component";
import {MainPageComponent} from "./core/main-page/main-page.component";
import {NavigationComponent} from "./core/navigation/navigation.component";
import {provideHttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  providers: [ [provideHttpClient()]],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
