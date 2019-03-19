import { Component, ViewChild, ElementRef } from '@angular/core';

import * as $ from 'jquery';
import 'bootstrap';

@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html',
    styleUrls: []
})
export class ModalComponent {

    @ViewChild('testDialog')
    dialog: ElementRef;


    showModalDialog() {
        $(this.dialog.nativeElement).modal('show');
        
    }

}
