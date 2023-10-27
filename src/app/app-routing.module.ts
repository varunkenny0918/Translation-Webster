import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TestComponent } from './components/test/test.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  // {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
