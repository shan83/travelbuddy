import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TravelbuddyRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { TravelbuddyCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { TravelbuddyLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { TravelbuddyDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { TravelbuddyTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { TravelbuddyEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { TravelbuddyJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { TravelbuddyJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TravelbuddyRegionMySuffixModule,
        TravelbuddyCountryMySuffixModule,
        TravelbuddyLocationMySuffixModule,
        TravelbuddyDepartmentMySuffixModule,
        TravelbuddyTaskMySuffixModule,
        TravelbuddyEmployeeMySuffixModule,
        TravelbuddyJobMySuffixModule,
        TravelbuddyJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TravelbuddyEntityModule {}
