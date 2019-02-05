import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { ClienteDTO } from "../../models/cliente.dto";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../storage.service";

@Injectable()
export class ClienteService{

    constructor(public http: HttpClient,
                public storage: StorageService){

    }

    // recebe um email string e retorna um Observable cliente DTO
    findByEmail(email: string) : Observable<ClienteDTO>{
        return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
    }

    getImageFromBucket(id: string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
        //blob quer dizer que a resposta será uma imagem e não um json
        return this.http.get(url, {responseType: 'blob'});
    }
}   