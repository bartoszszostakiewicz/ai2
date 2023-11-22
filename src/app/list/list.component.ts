import {Component, OnInit} from '@angular/core';
import {Person} from "../person";
import {PersonLsService} from "../person-ls.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  people: Person[] = [];

  constructor(
    private personLsService: PersonLsService,
  ) {

  }

  ngOnInit(): void {
    this.people = this.personLsService.getAll();
  }

  deletePerson(i: number) {
    if(confirm("Are you sure you want to delete this person?")) {

      this.personLsService.deletePerson(i);
      this.people = this.personLsService.getAll();
    }
  }
}
