import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [MatButtonModule,MatCheckboxModule,MatToolbarModule,MatTabsModule,MatGridListModule,MatCardModule],
    exports: [MatButtonModule,MatCheckboxModule,MatToolbarModule,MatTabsModule,MatGridListModule,MatCardModule],
})
export class MaterialModule {}