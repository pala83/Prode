import { Component, OnInit } from '@angular/core';

import { Group } from '../../interfaces/group';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit{
    groups: Group[] = [];
    constructor(private groupDataService: GroupService) {}

    ngOnInit(): void {
        this.groupDataService.getAll().subscribe((group)=>{
            this.groups = group;
        })
    }
}
