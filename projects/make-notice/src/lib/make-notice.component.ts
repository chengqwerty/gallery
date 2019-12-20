import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MakeNoticeField } from './make-notice.field';

@Component({
    selector: 'make-notice',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './make-notice.component.html',
    styleUrls: ['./make-notice.component.scss']
})
export class MakeNoticeComponent implements OnInit {

    public messages: Array<MakeNoticeField> = [{messageId: '1', title: 'a'}, {messageId: '2', title: 'b'}];
    public abcs = [{a: 'a'}, {a: 'b'}];

    constructor(private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
    }

    public createMessage(notice: MakeNoticeField) {
        this.cdr.markForCheck();
        this.messages.push(notice);
        this.messages = [{messageId: '1', title: 'a'}, {messageId: '2', title: 'b'}];
        this.cdr.detectChanges();
    }

    addMessage() {
        this.messages.push({messageId: '1', title: 'a'});
    }

}
