import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() public parentData;
  //@Input('parentData') public externalName;

  @Output() public childEvent = new EventEmitter();

  public name = "JOAO PEDRO";
  public displayName = true;

  public colors = ["red", "blue", "green"];

  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

  showHidden()
  {
    this.displayName = !this.displayName;
  }

  fireEvent()
  {
    this.childEvent.emit("Retorno");
  }

}
