import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/componentes/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private Router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'cadastro de Produtos',
      icon: 'storeffront',
      routerUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void{
    console.log("Mavegando...")

    this.Router.navigate(['/products/create'])
  }
}
