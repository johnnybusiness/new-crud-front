import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Galeria } from 'src/interfaces/galeria';

const listPage: Galeria[] = [
  {id: 1, nome: 'Nome da Galeria', descricao: 'Descrição da galeria',
  concessao: 'ATE', data: new Date(), elaborador: 'Elaborador',
  qtdFotos: 10, tipoGaleria: 'Tipo da galeria'},
];


@Component({
  selector: 'app-lista-galeria',
  templateUrl: './lista-galeria.component.html',
  styleUrls: ['./lista-galeria.component.css']
})
export class ListaGaleriaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'concessao', 'nome', 'descricao', 'data', 'elaborador', 'qtdFotos', 'status'];
  dataSource = new MatTableDataSource<Galeria>(listPage);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
