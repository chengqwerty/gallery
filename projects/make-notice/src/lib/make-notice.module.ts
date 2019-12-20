import { NgModule } from '@angular/core';
import { MakeNoticeComponent } from './make-notice.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [MakeNoticeComponent],
    imports: [
        OverlayModule,
        CommonModule
    ],
    exports: [MakeNoticeComponent],
    entryComponents: [MakeNoticeComponent]
})
export class MakeNoticeModule { }
