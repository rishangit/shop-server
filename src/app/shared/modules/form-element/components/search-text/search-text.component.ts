import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormText } from '../../classes/formElement';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.css']
})
export class SearchTextComponent implements OnInit {
  @Input() formElement: FormText;
  @Input() object: any;
  @Output('changeElementEvent') changeElementEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
