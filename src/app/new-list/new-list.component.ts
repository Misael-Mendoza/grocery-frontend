import { Component, OnInit } from '@angular/core';
import { list } from '../services/list';
import { NewListServiceService } from '../services/new-list-service.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
  listNameValue = "";
  listData: list = { "name": "" };
  constructor(private listService: NewListServiceService) { }

  ngOnInit(): void {
  }

  get listName(): string {
    return this.listNameValue;
  }

  set listName(temp: string) {
    this.listNameValue = temp;
  }

  addNewList(): void {
    this.listData.name = this.listNameValue;
    console.log(this.listName);
    this.listService.postList(this.listData).subscribe(
      response => {
        window.location.reload();
      }
    );
  }


}
