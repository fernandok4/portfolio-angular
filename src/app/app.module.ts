import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { HomeHeaderComponent } from './shared/home-header/home-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SkillsComponent } from './routes/skills/skills.component';
import { ContactComponent } from './routes/contact/contact.component';
import { MiniKanaCharacterModule } from './shared/mini-kana-character/mini-kana-character.module';

@NgModule({
  declarations: [	
      AppComponent,
      HomeComponent,
      HomeHeaderComponent,
      SkillsComponent,
      ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot(),
    MiniKanaCharacterModule
  ],
  bootstrap: [AppComponent],
  exports: [BsDropdownModule]
})
export class AppModule { }
