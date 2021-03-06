import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TesteSharedModule } from '../../shared';
import {
    ProfessorService,
    ProfessorPopupService,
    ProfessorComponent,
    ProfessorDetailComponent,
    ProfessorDialogComponent,
    ProfessorPopupComponent,
    ProfessorDeletePopupComponent,
    ProfessorDeleteDialogComponent,
    professorRoute,
    professorPopupRoute,
} from './';

const ENTITY_STATES = [
    ...professorRoute,
    ...professorPopupRoute,
];

@NgModule({
    imports: [
        TesteSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ProfessorComponent,
        ProfessorDetailComponent,
        ProfessorDialogComponent,
        ProfessorDeleteDialogComponent,
        ProfessorPopupComponent,
        ProfessorDeletePopupComponent,
    ],
    entryComponents: [
        ProfessorComponent,
        ProfessorDialogComponent,
        ProfessorPopupComponent,
        ProfessorDeleteDialogComponent,
        ProfessorDeletePopupComponent,
    ],
    providers: [
        ProfessorService,
        ProfessorPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TesteProfessorModule {}
