import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormText} from '../../classes/formElement';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() formElement: FormText;
  @Input() object: any;
  @Output('changeElementEvent') changeElementEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  eventText_change($event) {
    this.changeElementEvent.emit(this.formElement);
  }

}
