import {Component, OnInit} from '@angular/core';
import {StatisticsService} from "../../shared/services/statistics.service";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";
import 'hammerjs';

interface StatisticsData {
  label: string
  value: number
}

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})

export class ChartsComponent implements OnInit {
  id: number;
  from: string;
  to: string;
  isShowPreloader: boolean = true;
  isNoData: boolean;
  clicksData = [] as Array<StatisticsData>;
  viewsData = [] as Array<StatisticsData>;
  dataClickSource: any;
  dataViewsSource: any;

  bsValue = new Date();
  maxDate = new Date();
  bsRangeValue: Date[];

  constructor(private statisticsService: StatisticsService,
              private activateRoute: ActivatedRoute,
              private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];

    this.from = this.getDateConversion(new Date(this.bsValue.setDate(this.bsValue.getDate() - 7)));
    this.to = this.getDateConversion(this.maxDate);
    this.bsRangeValue = [this.bsValue, this.maxDate];

    this.chartsDataLoad();
  }

  chartsDataLoad(): void {
    this.isShowPreloader = true;
    this.statisticsService.getChartData(this.id, this.from, this.to).subscribe(data => {
      this.clicksData = [];
      this.viewsData = [];
      this.isNoData = !!data;
      if(this.isNoData) {
        data.map(c => this.clicksData.push({
          label: this.datePipe.transform(new Date(c.date), 'dd MMM yyyy'),
          value: c.clicks
        } as StatisticsData));
        data.map(c => this.viewsData.push({
          label: this.datePipe.transform(new Date(c.date), 'dd MMM yyyy'),
          value: c.page_views
        } as StatisticsData));
      }

      this.setStatisticsData();
      this.isShowPreloader = false;
    });
  }

  onChangeDate(): void {
    this.from = this.getDateConversion(this.bsRangeValue[0]);
    this.to = this.getDateConversion(this.bsRangeValue[1]);

    this.chartsDataLoad();
  }

  setStatisticsData(): void {
    this.dataClickSource = {
      "chart": {
        "showValues": "0",
        "theme": "fusion"
      },
      "data": this.clicksData
    };

    this.dataViewsSource = {
      "chart": {
        "showValues": "0",
        "theme": "fusion"
      },
      "data": this.viewsData
    }
  }

  getDateConversion(date: Date): string {
    return this.datePipe.transform(new Date(date), 'yyyy-MM-dd')
  }
}
