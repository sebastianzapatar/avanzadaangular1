import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  title:string="Esta es la pagina para insertar";
  persona:Persona;
  constructor(private personaSerive:PersonaService, 
    private router:Router) { this.persona=new Persona(0,'','')}

  ngOnInit(): void {
  }
  create():void{
    this.personaSerive.create(this.persona).subscribe(
      response=>{this.router.navigate(['/'])
      Swal.fire('Nueva persona creada '+this.persona.nombre);  
    }
    );
  }
  
}
