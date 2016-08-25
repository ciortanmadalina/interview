import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Category} from "../../shared/category/category";
import {CategoryService} from "../../shared/category/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import { NS_ROUTER_DIRECTIVES, nsProvideRouter} from "nativescript-angular/router";
import {Page} from "ui/page";
import {NS_DIRECTIVES} from "nativescript-angular/directives";
@Component({
  selector: "categories",
  templateUrl: "pages/categories/categories.html",
  styleUrls: ["pages/categories/categories.css"],
  providers: [CategoryService],
  directives:[NS_ROUTER_DIRECTIVES, NS_DIRECTIVES]
})
export class CategoriesComponent implements OnInit {
  categoriesList: Array<Category> = [];

  constructor(private _categoryService: CategoryService, private _router: Router, private page: Page) {}
  ngOnInit() {
    this._categoryService.load().then(data => this.categoriesList = data);
  }

}
