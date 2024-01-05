import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './layout/user/user.component';
import { initFlowbite } from 'flowbite';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaindashboardComponent } from './components/maindashboard/maindashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    SidebarComponent,
    MaindashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
