import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "ProjetoAngular";

  ngOnInit(): void {
    console.log("inicializado");
  }
  appBotaoClick(): void {
    console.log(
      "mouse passado por cima no app.botão! ESTAMOS NO APP.COMPONENT"
    );
  }
}
