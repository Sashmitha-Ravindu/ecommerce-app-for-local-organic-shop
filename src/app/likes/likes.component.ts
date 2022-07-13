import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  @Input('likes-count') likesCount = 0;
  @Input('isLiked') isSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isSelected = !this.isSelected;
    if (this.isSelected){
      this.likesCount++;
    }else {
      this.likesCount--;
    }
  }

}
