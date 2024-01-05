import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './layout/user/user.component';

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      {
        path: "home",
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
