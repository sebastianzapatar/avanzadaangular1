import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Persona } from '../models/Persona';
import { Jefe } from '../models/Jefe';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private urlEndPoint:string='http://localhost:8080/api/personas/';
  private header=new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }
  getPersonas():Observable<Persona[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as Persona[])
    );
  }
  create(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.urlEndPoint,
      persona,{headers:this.header});
  }
  delete(id:number):Observable<Persona>{
    return this.http.delete<Persona>(this.urlEndPoint+id.toString(),{headers:this.header})
  }
  getPersona(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.urlEndPoint+id.toString());
  }
  updatePersona(persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.urlEndPoint}${persona.id}`,persona,{headers:this.header})
  }
  getJefes():Observable<Jefe[]>{
    return this.http.get<Jefe[]>(this.urlEndPoint+"jefes");
    
  }
}
