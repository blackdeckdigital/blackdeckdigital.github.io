import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  radioModel: string = 'Month';

    // Pie
    public pieChartLabels: string[] =[];
    public pieChartData: number[] =[];
    public pieChartColors: any[];
    
    public pieChartType = 'pie';
   //Bar
   public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2-2-2020', '3-2-2020', '4-2-2020', '5-2-2020', '6-2-2020', '7-2-2020', '8-2-2020'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public userdetails:any=[];
  public usersSelect:any=[];

  public barChartData: any[] = [];


  constructor(public http: HttpClient,config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.getJSON('./assets/json/userdetails.json').subscribe(data => {
      
      this.userdetails=data;
    });
    this.getJSON('./assets/json/pie.json').subscribe(data => {
      console.log(data.value);
     this.pieChartData=data.value as any [];
     this.pieChartLabels=data.label as any [];
     this.pieChartColors =["#ff9900","#ff9900","#97bbcd"]; 
    });
    this.getJSON('./assets/json/uservisit.json').subscribe(data => {
      // console.log(data.value);
     this.barChartData=data;
    });
  }
  public getJSON(url): Observable<any> {
    return this.http.get(url);
  }
     
  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
   
    
  }

  open(content,user) {
this.usersSelect=user;
    this.modalService.open(content);
  }
}
