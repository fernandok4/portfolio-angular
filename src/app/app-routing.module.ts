import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { ContactComponent } from './routes/contact/contact.component';
import { AboutComponent } from './routes/about/about.component';
import { BlogComponent } from './routes/blog/blog.component';
import { PostComponent } from './routes/post/post.component';
import { OnePageHomeComponent } from './routes/one-page-home/one-page-home.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'new-home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'blog/post/:fileName', component: PostComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'new-home', component: OnePageHomeComponent
  },
  {
    path: '**', redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
