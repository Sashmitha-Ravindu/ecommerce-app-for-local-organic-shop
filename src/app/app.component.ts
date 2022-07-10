import { Component } from '@angular/core';
import {FavouriteChangedEventArgs} from "./favourites/favourites.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  post = {
    title:"Title",
    isFavourite:true
  }

  isFavouritesChanged(eventArgs: FavouriteChangedEventArgs){
    console.log("Favourites changed!",eventArgs);
  }

}
