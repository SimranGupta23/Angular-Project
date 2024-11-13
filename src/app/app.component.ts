import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject';

  products: any[] = [
    { name: 'Product 1', price: 100, category: 'Category 1' },
    { name: 'Product 2', price: 150, category: 'Category 2' },
    { name: 'Product 3', price: 200, category: 'Category 3' }
  ];
  selectedProduct: any;
  productForm: FormGroup;
  barChartData: any[] = [];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      category: ['', Validators.required]
    });

    this.updateBarChart();
  }

  // Add new product
  addProduct() {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;
      this.products.push(newProduct);
      this.updateBarChart();
      this.productForm.reset();
    }
  }

  // Edit selected product
  editProduct() {
    if (this.selectedProduct && this.productForm.valid) {
      const updatedProduct = this.productForm.value;
      const index = this.products.findIndex(product => product === this.selectedProduct);
      if (index > -1) {
        this.products[index] = updatedProduct;
        this.updateBarChart();
        this.productForm.reset();
      }
    }
  }

  // Delete selected product
  deleteProduct(product:any) {
    this.selectedProduct = product
    if (this.selectedProduct) {
      const index = this.products.findIndex(product => product === this.selectedProduct);
      if (index > -1) {
        this.products.splice(index, 1);
        this.updateBarChart();
        this.selectedProduct = null;
      }
    }
  }

  // Update bar chart data
  updateBarChart() {
    this.barChartData = this.products.map(product => ({
      name: product.name,
      value: product.price
    }));
    this.selectedProduct = null
  }

  // Select a product from the table for editing
  onSelectProduct(product: any) {
    this.selectedProduct = product;
    this.productForm.patchValue(product);
  }
}
