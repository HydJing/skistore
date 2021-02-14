import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  @Input() totalCount: number;
  @Input() pageSize: number;
  @Input() pageNumber: number;
  @Input() pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onPageChange(event: any) {
    this.pageChanged.emit(event.page);
  }

}
