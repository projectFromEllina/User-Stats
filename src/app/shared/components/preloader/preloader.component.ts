import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {
  @Input() isShow: boolean = true;

  ngOnInit() {
  }

}
