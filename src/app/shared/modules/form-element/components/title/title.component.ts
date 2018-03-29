import { Component, OnInit, Input } from '@angular/core';
import { FormTitle } from '../../classes/formElement';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() formElement: FormTitle;
  constructor() { }

  ngOnInit() {
  }

}
