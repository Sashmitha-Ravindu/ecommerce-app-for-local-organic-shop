import {Pipe,PipeTransform} from "@angular/core";

@Pipe({
  name:'car'
})
export class CarPipe implements PipeTransform{
  transform(value: String, length?: number): any {
    if (!value){
      return null;
    }

    let actualLength = (length) ? length : 100;

    return value.substring(0,actualLength)+"...";
  }

}
