import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-chart',
  templateUrl: './timeline-chart.component.html',
  styleUrls: ['./timeline-chart.component.scss']
})
export class TimelineChartComponent implements OnInit {
  @Input() results: any = [];
  view: any[] = [600, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Dates of Visits';
  showYAxisLabel = true;
  yAxisLabel = 'Count of Visits';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  data: any = [];
  constructor() { }

  ngOnInit() {
    this.results.forEach(ele => {
      this.data.push( {name: ele.date, value: ele.count});
    });
    console.log(this.data);
  }

}
