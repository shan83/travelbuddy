import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    TravelbuddySharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        TravelbuddySharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        TravelbuddySharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class TravelbuddySharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
