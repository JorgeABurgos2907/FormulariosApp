import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080 ti'),
  //   'precio': new FormControl(1500),
  //   'existencias': new FormControl(5)
  // })

  constructor(private fb: FormBuilder) { }

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required , Validators.minLength(3)] ],
    precio: [ , [Validators.required, Validators.min(0)]],
    existencias: [ , [Validators.required, Validators.min(0)]]
  })

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors  && this.miFormulario.controls[campo].touched;
  }

  

}
