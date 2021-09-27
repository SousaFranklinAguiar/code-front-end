import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceCategoria } from './InterfaceCategoria';
import { Observable } from 'rxjs';
import { CategoriaModel } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient: HttpClient) { }
  
  

  obterTodos(): Observable<any>{
    return this.httpClient.get<InterfaceCategoria[]>('/api/categorias');
  }

  cadastrarCategorias(categoria: CategoriaModel): Observable<any>{
    return this.httpClient.post<CategoriaModel>('/api/categorias', categoria);
  }

  deletarCategoria(id: any){
    return this.httpClient.delete<CategoriaModel>('/apicategorias/' .concat(id));
  }
}
