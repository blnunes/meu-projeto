import {Component, Input , OnInit} from '@angular/core';

@Component({
  selector: 'app-meu-primeiro-component',
  templateUrl: './meu-primeiro-component.component.html',
  styleUrls: ['./meu-primeiro-component.component.scss']
})
export class MeuPrimeiroComponentComponent implements OnInit {
  @Input() textoBotao!: string;
  @Input() tamanho!: string;

  testTwoWayDataBind: string = '10';

  constructor() {
    this.testTwoWayDataBind = this.tamanho;
  }



  ngOnInit(): void {
    this.testTwoWayDataBind = this.tamanho;
    console.log(this.textoBotao);
  }

}
