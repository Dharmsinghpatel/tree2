import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ReadingComponent } from './component/reading/reading.component';
import { VideoComponent } from './component/video/video.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'read', component: ReadingComponent },
  { path: 'read/:id', component: ReadingComponent },
  { path: 'video', component: VideoComponent },
  { path: 'video/:id', component: VideoComponent },
  { path: 'know/:id', component: ReadingComponent },
  { path: 'news', component: ReadingComponent },
  { path: 'news/:id', component: ReadingComponent },
  { path: 'contant', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
