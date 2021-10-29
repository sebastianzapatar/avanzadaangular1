import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../../models/Persona';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  personas:Persona[];
  constructor(private personaService:PersonaService) { this.personas=[]}

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(
      personas=>this.personas=personas
    )
  }
  delete(persona:Persona):void{
    Swal.fire({
      title:'Esta seguro',
      text:'No podra reversar esta opcion',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si, Eliminar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.personaService.delete(persona.id).subscribe(
            response=>{
            this.personas=this.personas.filter(cli=> cli!==persona)
            Swal.fire(
              'Borrado',
              'El cliente ha sido borrado',
              'success'
            )
          }
        )
        
      }
    })
  }
}
