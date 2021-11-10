import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { Jefe } from 'src/app/models/Jefe';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  title:string="Esta es la pagina para insertar";
  persona:Persona;
  public jefes:Jefe[]
  constructor(private personaSerive:PersonaService, 
    private router:Router, private activate:ActivatedRoute) { this.persona=new Persona(0,'','',
    new Jefe(0,'','')),this.jefes=[]}

  ngOnInit(): void {
    this.cargarPersona();
    this.personaSerive.getJefes().subscribe(jefes=>this.jefes=jefes);
  }
  cargarPersona():void{
    this.activate.params.subscribe(params=>{
      let id=params["id"];
      if(id){
        this.personaSerive.getPersona(id).subscribe(persona=>this.persona=persona);
      }
    })
  }
  update():void{
    this.personaSerive.updatePersona(this.persona).subscribe(
      response=>{
        this.router.navigate(['/']);
        Swal.fire('Persona actualizada','','success')
      }
    )
  }
  create():void{
    this.personaSerive.create(this.persona).subscribe(
      response=>{this.router.navigate(['/'])
      Swal.fire('Nueva persona creada '+this.persona.nombre);  
    }
    );
  }
  
}
