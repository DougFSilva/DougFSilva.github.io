import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Acesso } from 'src/app/models/Acesso';
import { AcessoService } from 'src/app/services/acesso.service';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {
  tag:number = null;
  acesso:Acesso = {
    usuario: '',
    tipoUsuario: '',
    timestamp: '',
    mensagem: '',
    acessoLiberado: false,
    entradaSaida:''
  }

  constructor(
    private service: AcessoService,
    private toast: ToastrService
    ) { }

  ngOnInit(): void {
  }

  findByTag():void{
    this.service.getAcesso(this.tag).subscribe(response =>{
      this.acesso = response
    },(ex)=>{
      this.toast.error(ex.error.error, 'Error')
    })
  }

}
