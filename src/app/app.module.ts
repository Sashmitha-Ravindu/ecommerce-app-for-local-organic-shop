import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesComponent} from "./courses.component";
import { CourseComponent } from './course/course.component';
import {CoursesService} from "./courses.service";
import { AuthorComponent } from './author/author.component';
import {AuthorService} from "./author.service";
import {FormsModule} from "@angular/forms";
import {SummaryPipe} from "./summary.pipe";
import {CarPipe} from "./car.pipe";
import { FavouritesComponent } from './favourites/favourites.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import {SmartTitleCasePipe} from "./smart-title-case.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    SummaryPipe,
    CarPipe,
    FavouritesComponent,
    TitlecaseComponent,
    SmartTitleCasePipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
