import { Injectable, Output, EventEmitter } from '@angular/core';
import { ModalController } from "ionic-angular";

@Injectable()
export class ModalService {
    private _page:any;
    @Output() onModalDismiss: EventEmitter<any> = new EventEmitter();
    
    constructor(public modalCtrl: ModalController) {
        
    }

    presentModal(page:any, aditionaldata?:any) {
        let modal = this.modalCtrl.create(page, aditionaldata);
        
        modal.onDidDismiss(data => {
            this.onModalDismiss.emit(data);
        });
        
        modal.present();
    }

}
