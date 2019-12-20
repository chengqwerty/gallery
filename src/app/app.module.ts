import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MakeGalleryModule } from 'make-gallery';
import { MakeNoticeModule } from '../../projects/make-notice/src/lib/make-notice.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MakeGalleryModule,
        MakeNoticeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
