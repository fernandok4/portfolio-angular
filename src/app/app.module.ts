import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { HomeHeaderComponent } from './shared/home-header/home-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ContactComponent } from './routes/contact/contact.component';
import { MiniKanaCharacterModule } from './shared/mini-kana-character/mini-kana-character.module';
import { TimelineModule } from './shared/timeline/timeline.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AboutModule } from './routes/about/about.module';
import { BlogComponent } from './routes/blog/blog.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostComponent } from './routes/post/post.component';

@NgModule({
  declarations: [	
      AppComponent,
      HomeComponent,
      HomeHeaderComponent,
      ContactComponent,
      BlogComponent, 
      PostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgSelectModule,
    AppRoutingModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot(),
    MiniKanaCharacterModule,
    TimelineModule,
    AboutModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  bootstrap: [AppComponent],
  exports: [BsDropdownModule]
})
export class AppModule { }
