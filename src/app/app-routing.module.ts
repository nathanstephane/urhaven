import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { KanbanComponent } from './kanban/kanban.component';
import { SoundscapeComponent } from './soundscape/soundscape.component';
import { NotesComponent } from './notes/notes.component';
import { SabbathschoolComponent } from './sabbathschool/sabbathschool.component';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [ 
      {path: 'bookmarks', component: BookmarksComponent},
      {path: 'kanban', component: KanbanComponent},
      {path: 'soundscape', component: SoundscapeComponent},
      {path: 'notes', component: NotesComponent},
      {path: 'sabbath-school', component: SabbathschoolComponent},
      {path:'tasks',component: TasksComponent}

    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
