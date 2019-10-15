import { Component, OnInit, Input } from '@angular/core';
import { Toy } from '../toy';

@Component({
  selector: 'app-toy-detail',
  templateUrl: './toy-detail.component.html',
  styleUrls: ['./toy-detail.component.css']
})
export class ToyDetailComponent implements OnInit {
  @Input() toy: Toy;

  constructor() { }

  ngOnInit() {
  }

}