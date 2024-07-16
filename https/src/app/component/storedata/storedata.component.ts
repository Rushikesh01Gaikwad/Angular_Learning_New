import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-storedata',
  templateUrl: './storedata.component.html',
  styleUrl: './storedata.component.scss'
})
export class StoredataComponent implements OnInit  {

  users: any;
  product = { title: '', price: 0, category: '' };
  deleteName!: string;

  constructor(private userdataServi: UserDataService){ }
  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.userdataServi.getData().subscribe((data)=>{
      this.users=data;});
  }
  addProduct() {
    this.userdataServi.addUser(this.product).subscribe((data) => {
      console.log('Product added:', data);
      this.getData();
    });
  }


  deleteProduct() {
    if (this.deleteName) {
      this.userdataServi.deleteUser(this.deleteName).subscribe((data) => {
        console.log('Product deleted:', data);
        this.getData();
      });
    } else {
      console.warn('Please provide a valid Product name to delete');
    }
  }



}
