import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {Router} from "@angular/router";
import {NS_DIRECTIVES} from "nativescript-angular/directives";

//var labelModule = require("ui/label");
//var label = new labelModule.Label();
//var gestures = require("ui/gestures");

@Component({
    selector: "welcome",
    templateUrl: "pages/welcome/welcome.html",
    styleUrls: ["pages/welcome/welcome.css"]
})

export class WelcomeComponent implements OnInit {
    public counter: number = 16;

    constructor(private page: Page, private _router: Router) {
    }

    ngOnInit() {
      this.page.actionBarHidden = true;
      //this.page.backgroundImage = "~/images/grey.jpg";
    }
    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }

    public goToCategories() {
      this._router.navigate(["/categories"]);
    }

}
