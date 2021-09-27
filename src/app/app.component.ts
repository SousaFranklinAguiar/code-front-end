import { Component } from '@angular/core';

import { CategoriaModel } from './categoria.model';
import { CategoriaService } from './categoria.service';
import { InterfaceCategoria } from './InterfaceCategoria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste';

  constructor(private categoriaService: CategoriaService){

  }
  
  categorias: Array<any> = new Array;
  categoria: CategoriaModel = new CategoriaModel();

  obterTodasCategorias(){
    this.categoriaService.obterTodos().subscribe(categorias => {
      this.categorias = categorias;
    })
  }

  cadastrarCategoria(){
    this.categoriaService.cadastrarCategorias(this.categoria).subscribe(categoria => {
      this.categoria = new CategoriaModel();
      this.obterTodasCategorias();
    })
  }

  removerCategoria(id: number){
    this.categoriaService.deletarCategoria(id).subscribe(categoria => {
      this.categoria = new CategoriaModel();
      this.obterTodasCategorias();
    })
  }
}
