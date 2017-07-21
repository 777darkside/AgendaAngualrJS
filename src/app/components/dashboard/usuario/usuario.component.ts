import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
/* formularioUsuario:FormGroup;
uri:string;
usuario:any;
notificacion:any = {
  estado: false,
  mensaje: ""
}*/
  constructor(
    private usuarioService:UsuarioService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    /* let validaciones = [
      Validators.required, Validators.minLength(3)
    ];

   this.activatedRoute.params.subscribe(params => {
      this.uri = params["idUsuario"];
        this.usuarioService.getUsuario(params["idUsuario"])
        .subscribe(u => {
          this.usuario = u;
          this.formularioUsuario = new FormGroup({
            'nick': new FormControl(this.usuario.usuario_nick, validaciones),
            'pass': new FormControl(this.usuario.usuario_pass, validaciones)
          });
        });
      });*/



  }

  ngOnInit() {

  }
}
