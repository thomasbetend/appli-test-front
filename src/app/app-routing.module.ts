import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { HomeComponent } from './home/home.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { ActorsListComponent } from './actors-list/actors-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: MyFormComponent },
  { path: 'add-actor', component: AddActorComponent },
  { path: 'actors-list', component: ActorsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
