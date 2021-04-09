import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro-component',
  templateUrl: './meu-primeiro-component.component.html',
  styleUrls: ['./meu-primeiro-component.component.scss']
})
export class MeuPrimeiroComponentComponent implements OnInit {

  testTwoWayDataBind = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
