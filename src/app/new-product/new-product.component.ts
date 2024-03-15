import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpproductService } from '../Services/httpproduct.service';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css',
})
export class NewProductComponent implements OnInit {
  addproductform!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private httpservice: HttpproductService
  ) {}
  ngOnInit(): void {
    this.addproductform = this.formbuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      imgURL: ['', Validators.required],
      categoryID: ['', Validators.required],
      description: ['', Validators.required],
      matrial: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }
  getIsError(controlName: string, errorname: string) {
    return (
      this.addproductform.controls[controlName].dirty &&
      this.addproductform.controls[controlName].touched &&
      this.addproductform.controls[controlName].errors?.[errorname]
    );
  }
  onSubmit() {
    //console.log(this.addproductform.value);
    this.httpservice.addproduct(this.addproductform.value).subscribe((p) => {
      'Added Successfully';
    });
  }
}
