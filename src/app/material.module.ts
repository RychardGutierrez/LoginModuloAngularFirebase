import {NgModule} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports:[
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule
    ],
    exports:[
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule
    ]
})
export class MaterialModule{}