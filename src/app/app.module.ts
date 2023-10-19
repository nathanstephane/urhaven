import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { KanbanComponent } from './kanban/kanban.component';
import { SoundscapeComponent } from './soundscape/soundscape.component';
import { NotesComponent } from './notes/notes.component';
import { SabbathschoolComponent } from './sabbathschool/sabbathschool.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    KanbanComponent,
    SoundscapeComponent,
    NotesComponent,
    SabbathschoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
