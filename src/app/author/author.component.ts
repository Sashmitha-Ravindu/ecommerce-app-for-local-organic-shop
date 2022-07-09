import { Component, OnInit } from '@angular/core';
import {AuthorService} from "../author.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  authors;

  imageUrl = "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg";

  colSpan = 2;


  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }

  ngOnInit(): void {
  }

}
