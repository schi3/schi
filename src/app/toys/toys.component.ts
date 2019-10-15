import { Component, OnInit } from '@angular/core';
import { Toy } from '../toy';
import { TOYS } from '../mock_toys';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {
  toys = TOYS;
  selectedToy: Toy;

  constructor() { }

  ngOnInit() {
  }
onSelect(toy: Toy): void {
	this.selectedToy = toy;

	}
}