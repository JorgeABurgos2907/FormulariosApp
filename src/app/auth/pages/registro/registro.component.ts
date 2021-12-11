import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['',[Validators.required, Validators.email, Validators.pattern(this.validatorService.emailPattern) ]],
    username: ['',[Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['',[Validators.required, Validators.minLength(6) ]],
    password2: ['',[Validators.required, ]],
  }, {
    Validators: [this.validatorService.camposIguales('password','password2')]
  })

  constructor(private fb:FormBuilder, private validatorService: ValidatorService) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Jorge Burgos',
      email: 'burgosjorge2907@gmail.com',
      username: 'spiderman'
    })
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){

    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();

  }

}
