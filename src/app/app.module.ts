import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//service
import { HttpClientModule } from '@angular/common/http';
import { CarouselService } from './sub-component/carousel/carousel.service';
import { HeaderService } from './sub-component/header/header.service';

import { HeaderComponent } from './sub-component/header/header.component';
import { FooterComponent } from './sub-component/footer/footer.component';
import { SidebarComponent } from './sub-component/sidebar/sidebar.component';
import { NavbarComponent } from './sub-component/navbar/navbar.component';
import { BreadcrumbComponent } from './sub-component/breadcrumb/breadcrumb.component';
import { HomeComponent } from './component/home/home.component';
import { CarouselComponent } from './sub-component/carousel/carousel.component';
import { ReadingComponent } from './component/reading/reading.component';

// import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // HomeComponent,
    SidebarComponent,
    NavbarComponent,
    BreadcrumbComponent,
    HomeComponent,
    CarouselComponent,
    ReadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CarouselService,
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
