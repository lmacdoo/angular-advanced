import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product
  constructor(
    private productService: ProductService,
    private headerService: HeaderService,
    private  router: Router,
    private route: ActivatedRoute
  ) {
    headerService.headerData = {
      title: 'deletar Produto',
      icon: 'delete',
      routerUrl: ''
    }
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product =>{ 
      this.product = product
    })
  }
  deleteProduct(): void{
    //const id = this.route.snapshot.paramMap.get('id')
    this.productService.delete(`${this.product.id}`).subscribe(() =>{
      this.productService.showMessage("deletado com sucesso!");
      this.router.navigate(['/products']);
    })
  }
  cancelProduct(): void {
    this.router.navigate(['/products']);
  }
}
