import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isFavourite = false;

  onClick(){
    this.isFavourite = !this.isFavourite;
  }

}
