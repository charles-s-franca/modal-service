import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalService } from './modal.service';

export * from './modal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    
  ],
  exports: [
    
  ]
})
export class ModalServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModalServiceModule,
      providers: [ModalService]
    };
  }
}
