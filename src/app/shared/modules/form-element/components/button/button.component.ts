import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormButton } from '../../classes/formElement';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() formElement: FormButton;
  @Output('changeElementEvent') changeElementEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  eventBtn_click(event) {
    this.changeElementEvent.emit(this.formElement);
  }

}
