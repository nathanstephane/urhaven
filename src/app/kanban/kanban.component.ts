import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Board } from '../data_models/board.models';
import { Column } from '../data_models/column.model';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
  
})
export class KanbanComponent {
  
  board: Board = new Board('My Kanban',[
   new Column("To do", ["Fix kanban task overflow","Fix top height","Or make top height resizable",
   "Enable users to add their own items","make some stuff resizable"]),
    new Column("Doing",["Working on the kanban", "On the app in general", "Taking care of the styling"]),
    new Column("Done",["Bookmark UI", "Drag and drop kanban"])
  ])


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
