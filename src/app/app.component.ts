import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit{
  isShowPreloader: boolean = true;

  constructor(private cdRef : ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isShowPreloader = false;
      this.cdRef.detectChanges();
    }, 500)
  }
}
