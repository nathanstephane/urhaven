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
import { BookmarkTileComponent } from './bookmark-tile/bookmark-tile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    KanbanComponent,
    SoundscapeComponent,
    NotesComponent,
    SabbathschoolComponent,
    BookmarkTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
