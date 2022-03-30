import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { ApiCallService } from 'src/app/services/api-call.service'
import { DetailModel } from 'src/app/models/details.model'
import { interval } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: string
  data  = [];
  dataA: any;
  modelData = []
  constructor(private route: ActivatedRoute,private apiCall: ApiCallService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.getDeviceData(this.id);
    });
  }

  

  getDeviceData(id){
    this.apiCall.getCurrentHouse(id).subscribe(result => {
      this.data = result["rooms"];
      this.handleInterval(id);
    })
  }

  handleInterval(id){
    interval(120000).subscribe(x => {
      this.getDeviceData(id);
    });
  }

}