import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {QuestionsComponent} from "./pages/questions/questions.component";


export const routes: RouterConfig = [
  { path: "", component: WelcomeComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "questions/:id", component: QuestionsComponent }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, { enableTracing: false })
];
