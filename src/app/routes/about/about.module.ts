import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MiniKanaCharacterModule } from 'src/app/shared/mini-kana-character/mini-kana-character.module';
import { TimelineModule } from 'src/app/shared/timeline/timeline.module';
import { AboutSkillComponent } from './about-skill/about-skill.component';
import { AboutTimelineComponent } from './about-timeline/about-timeline.component';
import { AboutComponent } from './about.component';

@NgModule({
    declarations: [	
        AboutComponent,
        AboutSkillComponent,
        AboutTimelineComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FontAwesomeModule,
        TimelineModule,
        MiniKanaCharacterModule,
    ],
    bootstrap: [],
    exports: [
        AboutComponent
    ]
})
export class AboutModule { }