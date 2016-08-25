import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Category} from "../../shared/category/category";
import {Question} from "../../shared/question/question";
import {CategoryService} from "../../shared/category/category.service";
import {QuestionService} from "../../shared/question/question.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Observable } from "rxjs";
import {NS_DIRECTIVES} from "nativescript-angular/directives";
import { NS_ROUTER_DIRECTIVES, nsProvideRouter} from "nativescript-angular/router";
@Component({
  selector: "questions",
  templateUrl: "pages/questions/questions.html",
  styleUrls: ["pages/questions/questions.css"],
  providers: [CategoryService, QuestionService],
  directives:[NS_ROUTER_DIRECTIVES, NS_DIRECTIVES]
})
export class QuestionsComponent implements OnInit {
  title: String;
  category:Category;
  id: number;
  questionsList: Array<Question> = [];
  selectedQ:number;
  constructor(private _categoryService: CategoryService, route: ActivatedRoute, private _questionService: QuestionService) {
    this.id = Number(route.snapshot.params['id']);
    this._categoryService.getCategory(this.id).then(data => this.title = data.name + ' Questions' );
  }
  ngOnInit() {
    this._questionService.getAll().then(data => this.questionsList = data);
  }

  public answer(id){
    this.selectedQ = id;
  }
}
