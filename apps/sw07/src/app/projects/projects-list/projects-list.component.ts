import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Projects } from '@angular/cli/lib/config/schema';

@Component({
  selector: 'bb-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Projects[]

  constructor() { }

  ngOnInit(): void {
  }

}
