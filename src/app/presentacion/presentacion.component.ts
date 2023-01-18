import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  constructor(private datosPortfolio:PortfolioService){}
    ngOnInit(): void{
      this.datosPortfolio.obtenerDatos;
    }
  }




