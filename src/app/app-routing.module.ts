import {NgModule} from '@angular/core';
import {RouterModule, Routes, } from '@angular/router';
import {UserListComponent} from "./core/user-list/user-list.component";
import {AddCardComponent} from "./core/add-card/add-card.component";

const routes: Routes = [
  {
    path: 'users',
    title: 'users',
    component: UserListComponent
  },
  {
    path: 'modal',
    title: 'modal',
    component: AddCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
