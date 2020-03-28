import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { MoveListComponent } from './move-list/move-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlayervsAIComponent } from './playervs-ai/playervs-ai.component';
import { AiVsAiComponent } from './ai-vs-ai/ai-vs-ai.component';
import { PlayerOptionsComponent } from './player-options/player-options.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RulesPageComponent } from './rules-page/rules-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MoveListComponent,
    HomepageComponent,
    PlayervsAIComponent,
    AiVsAiComponent,
    PlayerOptionsComponent,
    RulesPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RulesPageComponent]
})
export class AppModule { }
