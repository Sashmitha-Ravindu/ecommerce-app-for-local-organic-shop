
import { Component } from '@angular/core';
import {CoursesService} from "./courses.service";
@Component({
  selector: 'courses',
  template: `
        <span class="glyphicon glyphicon-star"></span>
  `
})
export class CoursesComponent{
  isSelected = false;

  doSelect(){
    if (this.isSelected){

    }
  }

}
