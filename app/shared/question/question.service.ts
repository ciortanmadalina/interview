import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Question} from "./question";
import {QUESTIONS} from "./question.mock";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class QuestionService {
  constructor(private _http: Http) {}

  getAll() {
    return Promise.resolve(QUESTIONS);
  }
  getCategory(catId: number){
    return this.getAll()
             .then(questions => questions.filter(question => question.categoryId === catId)[0]);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
