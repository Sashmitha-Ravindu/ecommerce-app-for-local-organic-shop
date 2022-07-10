import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],

})
export class FavouritesComponent implements OnInit {

  @Input('is-favourite') isFavourite = false;
  @Output('change') changes = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onClick(){
    this.isFavourite = !this.isFavourite;
    this.changes.emit({newValues:this.isFavourite});
  }

}

export interface FavouriteChangedEventArgs{
  newValue: boolean
}
