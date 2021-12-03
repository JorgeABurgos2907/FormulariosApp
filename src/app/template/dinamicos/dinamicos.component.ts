import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: []
}

interface Favorito {
  id:number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor() { }

  @ViewChild('miFormulario') miFormulario !: NgForm;

  ngOnInit(): void {
  }

  guardar(){

  }

  nombreValido():boolean{
    return this.miFormulario?.controls.nombre?.invalid && this.miFormulario?.controls.nombre?.touched
  }

}
