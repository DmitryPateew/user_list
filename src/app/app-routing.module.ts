import {NgModule} from '@angular/core';
import {RouterModule, Routes, } from '@angular/router';
import {UserListComponent} from "./core/user-list/user-list.component";

const routes: Routes = [
  {
    path: 'users',
    title: 'users',
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
