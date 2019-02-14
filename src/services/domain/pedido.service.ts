import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { PedidoDTO } from "../../models/pedido.dto";

 // para ser um service que possa ser injetado em outras classes
@Injectable()
export class PedidoService {
   
    constructor(public http: HttpClient){
    }

    insert(obj: PedidoDTO){
       return this.http.post(
           `${API_CONFIG.baseUrl}/pedidos`,
           obj,
           {
               observe: 'response',
               responseType: 'text'
           }
       ); 
    }
}