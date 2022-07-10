import {Pipe,PipeTransform} from "@angular/core";

@Pipe({
  name:'smartTitlecase'
})
export class SmartTitleCasePipe implements PipeTransform{
  transform(value: string, args?: any[]): any {
    if (!value) return null;

    let words = value.split(" ");

    for (let index = 0; index < words.length;index++){
      let word = words[index];

      if (index>0 && this.isPreposition(word)){
        words[index] = word.toLowerCase();
      } else {
        words[index] = this.toTitleCase(word)
      }
    }

    return words.join(" ");

  }

  private isPreposition(word:string):boolean{
    let lowerCaseWords = ["a","an","of","the","in","on","and","for"]

    return lowerCaseWords.includes(word.toLowerCase());
  }

  private toTitleCase(word: string):string{
    return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase();
  }

}
