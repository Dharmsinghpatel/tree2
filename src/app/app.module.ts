import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//service
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselService } from './sub-component/carousel/carousel.service';
import { HeaderService } from './sub-component/header/header.service';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//componet
import { HeaderComponent } from './sub-component/header/header.component';
import { FooterComponent } from './sub-component/footer/footer.component';
import { SidebarComponent } from './sub-component/sidebar/sidebar.component';
import { NavbarComponent } from './sub-component/navbar/navbar.component';
import { BreadcrumbComponent } from './sub-component/breadcrumb/breadcrumb.component';
import { HomeComponent } from './component/home/home.component';
import { CarouselComponent } from './sub-component/carousel/carousel.component';
import { ReadingComponent } from './component/reading/reading.component';
import { NavbarService } from './sub-component/navbar/navbar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YoutubePlayerComponent } from './sub-component/youtube-player/youtube-player.component';
import { SafehtmlPipe } from './pipe/safehtml.pipe';
import { VideoComponent } from './component/video/video.component';
import { YoutubeService } from './sub-component/youtube-player/youtube.service';
import { FloattabComponent } from './sub-component/floattab/floattab.component';
import { FloattabService } from './sub-component/floattab/floattab.service';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';

//interceptor
import { MockHttpCalIInterceptor } from '../interceptor/http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    BreadcrumbComponent,
    HomeComponent,
    CarouselComponent,
    ReadingComponent,
    YoutubePlayerComponent,
    SafehtmlPipe,
    VideoComponent,
    FloattabComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    CarouselService,
    HeaderService,
    NavbarService,
    ReadingComponent,
    TranslateService,
    YoutubeService,
    FloattabService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockHttpCalIInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}