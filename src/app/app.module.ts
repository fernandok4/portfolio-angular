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
import { BlogPostCardComponent } from './routes/blog/blog-post-card/blog-post-card.component';
import { AngularFireModule } from '@angular/fire';
import * as firebaseConfig from 'firebase-config.json'
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { OnePageHomeComponent } from './routes/one-page-home/one-page-home.component';
import { AboutSkillOnePageComponent } from './routes/one-page-home/about-skill/about-skill.component';
import { AboutTimelineBeautyComponent } from './routes/one-page-home/about-timeline/about-timeline.component';

@NgModule({
  declarations: [	
      AppComponent,
      HomeComponent,
      HomeHeaderComponent,
      ContactComponent,
      BlogComponent, 
      PostComponent,
      BlogPostCardComponent, 
      OnePageHomeComponent, 
      AboutSkillOnePageComponent,
      AboutTimelineBeautyComponent
  ],
  imports: [
    AngularFireModule.initializeApp(((firebaseConfig as any).default)),
    AngularFireAnalyticsModule,
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
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  bootstrap: [AppComponent],
  exports: [BsDropdownModule]
})
export class AppModule { 

  constructor(){
  }
}
