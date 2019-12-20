import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { MakeNoticeModule } from './make-notice.module';
import { MakeNoticeComponent } from './make-notice.component';
import { ComponentPortal } from '@angular/cdk/portal';

let noticeId = 0;

@Injectable({
    providedIn: MakeNoticeModule
})
export class MakeNoticeService {
    private name = 'notice';
    private makeNoticeComponent: MakeNoticeComponent;

    constructor(private cfr: ComponentFactoryResolver,
                private injector: Injector,
                private overlay: Overlay,
                private appRef: ApplicationRef) {
        this.makeNoticeComponent = this.initContainer();
    }

    private initContainer(): MakeNoticeComponent {
        const factory = this.cfr.resolveComponentFactory(MakeNoticeComponent);
        let componentRef = factory.create(this.injector);
        componentRef.changeDetectorRef.detectChanges();
        const makeNoticePortal = new ComponentPortal(MakeNoticeComponent);
        componentRef = this.overlay.create().attach(makeNoticePortal);
        // this.appRef.attachView(componentRef.hostView);
        // const overlayPane = this.overlay.create({
        //     height: 100,
        //     width: 2000
        // }).overlayElement;
        // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
        // overlayPane.style.zIndex = '1010';
        // overlayPane.appendChild((componentRef.hostView as EmbeddedViewRef<{}>).rootNodes[0] as HTMLElement);

        return componentRef.instance;
    }

    public addMessage(type: string, title: string) {
        this.makeNoticeComponent.createMessage({ messageId: this.getMessageId(), type, title });
    }

    private getMessageId() {
        return this.name + (noticeId++);
    }
}
