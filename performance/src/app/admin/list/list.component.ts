import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  constructor(private apiCall: ApicallService){
    console.log("List module loaded successfully")
  }
  ngOnInit(): void {
    this.getData();
  }

  fetched_data:any;

  getData(){
    this.apiCall.getdata().subscribe((data)=>{
      this.fetched_data = data;
    })
  }

}
