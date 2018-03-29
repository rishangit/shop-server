import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormElementType } from '../../classes/formElement';

@Component({
  selector: 'draw-elements',
  templateUrl: './draw-elements.component.html',
  styleUrls: ['./draw-elements.component.css']
})
export class DrawElementsComponent implements OnInit {
  @Input() formElement;
  @Input() object;
  @Output('changeElementEvent') changeFormElementEvent = new EventEmitter<any>();
  @Output('drowCustomElementEvent') drowFormCustomElementEvent = new EventEmitter<any>();
  formElementType = FormElementType;
  constructor() { }

  ngOnInit() {

  }

  changeElementEvent(event) {
    this.changeFormElementEvent.emit(event);
  }

  drowCustomElementEvent(event){
    this.drowFormCustomElementEvent.emit(event);
  }
}
