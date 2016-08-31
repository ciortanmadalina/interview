import {Component, ElementRef, OnInit, Input} from "@angular/core";

@Component({
  selector: "answer",
  template: `<Label [text]="formattedString" class="answer" textWrap="true" visibility="{{ isVisible ? 'visible' : 'collapsed' }}"></Label>`,
  styleUrls: ["pages/questions/questions.css"]
})
export class AnswerComponent implements OnInit {
  @Input("message") message;
  @Input("isVisible") isVisible;
  formattedString: string;
  constructor() {
  }
  ngOnInit() {
    if (this.message != null ){
      this.formattedString = this.message.replace(/\s+/g,' ').trim();
      this.formattedString = this.formattedString.replace(/\s*<br>\s*/g,'\n\r').trim();
    }
  }
}
