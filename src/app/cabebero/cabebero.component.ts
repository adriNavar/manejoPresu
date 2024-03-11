import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabebero',
  templateUrl: './cabebero.component.html',
  styleUrls: ['./cabebero.component.css']
})
export class CabeberoComponent implements OnInit {
  @Input()presupuestoTotal:number; // se agrega el input para pode enviar info de componente a componente
  @Input()ingresoTotal:number;
  @Input()egresoTotal:number;
  @Input()porcentajeTotal:number;


  constructor() { }

  ngOnInit(): void {
  }

}
