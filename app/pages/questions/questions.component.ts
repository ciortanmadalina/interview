import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Category} from "../../shared/category/category";
import {CategoryService} from "../../shared/category/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Observable } from "rxjs";
import {NS_DIRECTIVES} from "nativescript-angular/directives";
import { NS_ROUTER_DIRECTIVES, nsProvideRouter} from "nativescript-angular/router";
@Component({
  selector: "questions",
  templateUrl: "pages/questions/questions.html",
  styleUrls: ["pages/questions/questions.css"],
  providers: [CategoryService],
  directives:[NS_ROUTER_DIRECTIVES, NS_DIRECTIVES]
})
export class QuestionsComponent implements OnInit {
  title: String;
  category:Category;
  id: String;
  constructor(private _categoryService: CategoryService, route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }
  ngOnInit() {
    let intId :number;
    intId = Number(this.id);
    this._categoryService.getCategory(intId).then(data => this.title = data.name );
  }

  public goToQuestions(category){
    alert(category.name);
  }
}
