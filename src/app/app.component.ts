import { Component, OnInit } from '@angular/core';
import { MakeNoticeService } from '../../projects/make-notice/src/lib/make-notice.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'gallery';

    constructor(private makeNoticeService: MakeNoticeService) {

    }

    ngOnInit(): void {
    }

    addMessage() {
        console.log('add message');
        this.makeNoticeService.addMessage('success', 'sb a you');
    }
}
