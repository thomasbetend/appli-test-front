import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonServiceService } from './mon-service.service';
import { MyFormComponent } from './my-form/my-form.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { HomeComponent } from './home/home.component';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    AddActorComponent,
    HomeComponent,
    ActorsListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
