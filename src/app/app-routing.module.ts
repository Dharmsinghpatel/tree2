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
  { path: 'document', component: ReadingComponent, data: { type: 'document' } },
  { path: 'document/:id', component: ReadingComponent, data: { type: 'document' } },
  { path: 'video', component: VideoComponent, data: { type: 'video' } },
  { path: 'video/:id', component: VideoComponent, data: { type: 'video' } },
  { path: 'info', component: ReadingComponent, data: { type: 'info' } },
  { path: 'info/:id', component: ReadingComponent, data: { type: 'info' } },
  { path: 'news', component: ReadingComponent, data: { type: 'news' } },
  { path: 'news/:id', component: ReadingComponent, data: { type: 'news' } },
  { path: 'contant', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
