import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Produto } from "./produto";
import { Observable } from 'rxjs'


@Injectable() /* O Angular passa a enxergar como um tipo de serviço ou uma clsse que pode ser injetada em algum lugar */
export class ProdutoService {
  constructor(private http: HttpClient) {}

  protected UrlServiceV1: string = "http://localhost:3009/";

  obterProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.UrlServiceV1 + "produtos") /* parei em 7:07 */
  }

}