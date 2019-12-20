export interface MakeNoticeField {
    messageId: string;
    type?: 'success' | 'info' | 'error' | 'blank' | string;
    title?: string;
}
