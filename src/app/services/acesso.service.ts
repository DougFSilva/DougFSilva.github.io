import { API_CONFIG } from 'src/app/config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acesso } from '../models/Acesso';

@Injectable({
  providedIn: 'root'
})
export class AcessoService {

  constructor(private http:HttpClient) { }

  getAcesso(tag:number):Observable<Acesso>{
    return this.http.get<Acesso>(`${API_CONFIG.baseUrl}/acesso/${tag}`);
  }
}
