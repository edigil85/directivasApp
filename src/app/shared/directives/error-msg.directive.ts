import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements  OnInit {

  private _color: string= 'red';
  private _mensaje: string= 'Este campo es requerido';
  private _valido: boolean = true;
  htmlElement: ElementRef<HTMLElement>;

  @Input() set color (valor: string){
    this._color = valor;
    this.setColor();
  }
  @Input() set  mensaje (valor: string){
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido (valor: boolean){
    this._valido = valor;
    this.validarError();
  }

  constructor( private el: ElementRef<HTMLElement>) {
    console.log('Constructor de la directiva');
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  validarError(): void {
    if (this._valido === true) {
      this.htmlElement.nativeElement.classList.add('hiden');
    }
    else{
      this.htmlElement.nativeElement.classList.remove('hiden');
    }
  }

  setEstilo(){
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }


}
