import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { NbIconConfig, NbSidebarService, NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
   
  }
  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

}
