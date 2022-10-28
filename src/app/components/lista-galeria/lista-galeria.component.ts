import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Galeria } from 'src/interfaces/galeria';

const listPage: Galeria[] = [
  {id: 1, nome: 'Nome da Galeria', descricao: 'Descrição da galeria',
  concessao: 'ATE', data: '27/10/22', elaborador: 'Elaborador',
  qtdFotos: 5, tipoGaleria: 'Tipo da galeria',},
  {id: 2, nome: 'Nome da Galeria', descricao: 'Descrição da galeria',
  concessao: 'ATE', data: '27/10/22', elaborador: 'Elaborador',
  qtdFotos: 10, tipoGaleria: 'Tipo da galeria'},
  {id: 3, nome: 'Nome da Galeria', descricao: 'Descrição da galeria',
  concessao: 'ATE', data: '27/10/22', elaborador: 'Elaborador',
  qtdFotos: 16, tipoGaleria: 'Tipo da galeria'},
  {id: 4, nome: 'Nome da Galeria', descricao: 'Descrição da galeria',
  concessao: 'ATE', data: '27/10/22', elaborador: 'Elaborador',
  qtdFotos: 20, tipoGaleria: 'Tipo da galeria'},
  {id: 5, nome: 'Nome da Galeria', descricao: 'Descrição da galeria',
  concessao: 'ABC', data: '27/10/22', elaborador: 'Elaborador',
  qtdFotos: 15, tipoGaleria: 'Tipo da galeria'},
  {id: 6, nome: 'Nome da Galeria', descricao: 'Descrição da galeria',
  concessao: 'ATE', data: '28/10/22', elaborador: 'Elaborador',
  qtdFotos: 20, tipoGaleria: 'Tipo da galeria'},
];


@Component({
  selector: 'app-lista-galeria',
  templateUrl: './lista-galeria.component.html',
  styleUrls: ['./lista-galeria.component.css']
})
export class ListaGaleriaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'concessao', 'nome', 'descricao', 'data', 'elaborador', 'qtdFotos', 'acoes'];
  dataSource = new MatTableDataSource<Galeria>(listPage);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Itens por página';
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
