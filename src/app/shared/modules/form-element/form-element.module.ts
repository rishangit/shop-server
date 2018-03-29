import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrawElementsComponent } from './components/draw-elements/draw-elements.component';
import { TextComponent } from './components/text/text.component';
import { TitleComponent } from './components/title/title.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchTextComponent } from './components/search-text/search-text.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DrawElementsComponent, TextComponent, TitleComponent, TextareaComponent, ButtonComponent, SearchTextComponent],
  exports:[DrawElementsComponent, TextComponent]
})
export class FormElementModule { }
