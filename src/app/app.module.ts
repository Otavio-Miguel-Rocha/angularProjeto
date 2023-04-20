import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BotaoModule } from "src/botao/botao.module";
import { NavModule } from "src/nav/nav.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BotaoModule, NavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
