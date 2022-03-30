import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';
import { MatTableDataSource } from "@angular/material/table";
import { ListModel } from 'src/app/models/list.model'
import { interval } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {
  dataSource: MatTableDataSource<ListModel>;
  mobileView: boolean;
  displayedColumns: string[] = ['name', 'totalTemp'];
  columnArray: Array<any> = [];
  tableLabels = {name: "Name", totalTemp: "House Temp"};
  constructor(private apiCall: ApiCallService) {this.HandleListData();this.dataSource = new MatTableDataSource(); }
  

  ngOnInit(): void {
      interval(120000).subscribe(x => {
       this.HandleListData()
      });
  }

  HandleListData(){
    this.apiCall.getHouseList().subscribe(listResult => {
      this.dataSource.data = listResult;
    });    
  }

}
