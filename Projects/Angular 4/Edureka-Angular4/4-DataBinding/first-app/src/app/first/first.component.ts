import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  headingTwo:string = "Interpolation";
  imageUrl:string="../../aasets/favicon.ico";

  constructor() { }

  ngOnInit() {
  }

}
