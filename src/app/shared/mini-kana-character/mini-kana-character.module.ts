import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharacterComponent } from './character/character.component';
import { MiniKanaCharacterComponent } from './mini-kana-character.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [	
        MiniKanaCharacterComponent,
        CharacterComponent
    ],
    exports: [
        MiniKanaCharacterComponent
    ]
})
export class MiniKanaCharacterModule {}