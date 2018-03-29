import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormTextarea } from '../../classes/formElement';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input() formElement: FormTextarea;
  @Input() object: any;
  @Output('changeElementEvent') changeElementEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  eventText_change($event) {
    this.changeElementEvent.emit(this.formElement);
  }
}
