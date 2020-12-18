import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProjectComponent} from './project/project.component';
import {AI2048Component} from './ai2048/ai2048.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'ai2048', component: AI2048Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
