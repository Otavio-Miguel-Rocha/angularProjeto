import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-botao",
  templateUrl: "./botao.component.html",
})
export class BotaoComponent {
  @Output()
  clickBotao = new EventEmitter();
  //utilizado para avisar os demais components antecedores que o botão foi clicado

  @Output()
  mouseover = new EventEmitter();

  @Input()
  conteudo: string;

  botao(): void {
    this.mouseover.emit();
  }
}
