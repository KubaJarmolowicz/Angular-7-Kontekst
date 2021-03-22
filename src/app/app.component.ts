import { Component, OnInit } from "@angular/core";
import { PageContextService } from "./context.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private service: PageContextService) {}

  brand: string;
  courseName: string;
  currentModule: string;

  ngOnInit() {
    this.brand = this.service.get("brand");
    this.courseName = this.service.get("courseName");
    this.currentModule = this.service.get("currentModule");
  }
}
