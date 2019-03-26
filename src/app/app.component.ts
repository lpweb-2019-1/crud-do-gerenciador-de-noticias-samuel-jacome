import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noticias = [];
  titulo = null;
  conteudo = null;
  descricao= null;
  data_da_publicacao= null;
  noticia_publicada= null;
  categoria= null;
  tags= null;
  editoria= null;
  editar_noticia= null;

  salvar() {
    if (this.editar_noticia !=null){
      this.editar_noticia.titulo = this.titulo;
      this.editar_noticia.conteudo= this.conteudo;
      this.editar_noticia.descricao = this.descricao;
      this.editar_noticia.data_da_publicacao= this.data_da_publicacao;
      this.editar_noticia.noticia_publicada= this.noticia_publicada;
      this.editar_noticia.categoria= this.categoria;
      this.editar_noticia.tags= this.tags;
      this.editar_noticia.editoria=this.editoria;
    }
    else{

      const noticia = {
        id: this.noticias.length,
        titulo: this.titulo,
        conteudo: this.conteudo,
        descricao: this.descricao,
        data_da_publicacao: this.data_da_publicacao,
        noticia_publicada: this.noticia_publicada,
        categoria: this.categoria,
        tags: this.tags,
        editoria: this.editoria,
        visivel: false
      };
      this.noticias.push(noticia);
    }
    this.titulo = null;
    this.conteudo = null;
    this.descricao= null;
    this.data_da_publicacao =null;
    this.noticia_publicada =null;
    this.categoria= null;
    this.tags =null;
    this.editoria= null;
  }

  mostrar(noticia) {
    noticia.visivel = true;
  }

  fechar(noticia) {
    noticia.visivel = false;
  }
  editar(noticia) {
    this.editar_noticia = noticia
    this.conteudo= noticia.conteudo
    this.titulo = noticia.titulo
    this.descricao = noticia.descricao
    this.data_da_publicacao = noticia.datapublicacao
    this.categoria = noticia.categoria
    this.tags = noticia.tags
    this.editoria = noticia.editoria
    console.log(noticia)
  } 
  excluir(noticia){
    if(confirm("Deseja realmente excluir a notícia "+noticia.titulo+" ?" ))
    for(let item of this.noticias){
      if(item.id == noticia.id){
        this.noticias.splice(item, 1)
      }
    }
  }
}
