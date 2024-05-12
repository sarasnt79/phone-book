import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



const routes = [
  {
      path: '', loadChildren: () => import('./phone-book/phone-book.module').then(m => m.PhoneBookModule)
  },

  { path: '**', redirectTo: '' },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
