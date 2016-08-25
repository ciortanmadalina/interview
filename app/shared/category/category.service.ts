import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Category} from "./category";
import {CATEGORIES} from "./category.mock";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class CategoryService {
  constructor(private _http: Http) {}

  load() {
    return Promise.resolve(CATEGORIES);
  }
  getCategory(id: number){
    return this.load()
             .then(categories => categories.filter(cat => cat.id === id)[0]);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
