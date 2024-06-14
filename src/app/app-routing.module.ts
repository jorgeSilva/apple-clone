import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LadingpageComponent } from './components/ladingpage/ladingpage.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
  {path: '', component: LadingpageComponent},
  {path: 'store', component: StoreComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
