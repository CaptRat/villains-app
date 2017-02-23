import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { VillainsListPageComponent } from './pages/villains/villains-list-page/villains-list-page.component';
import { VillainsNewComponent } from './pages/villains/villains-new/villains-new.component';
import { EditVillainComponent } from './pages/villains/edit-villain/edit-villain.component';
import { DeleteVillainComponent } from './pages/villains/delete-villain/delete-villain.component';
import { PageNotFoundComponent } from './pages/villains/page-not-found/page-not-found.component';

import { VillainService } from './villain.service'

@NgModule({
  declarations: [
    AppComponent,
    VillainsListPageComponent,
    VillainsNewComponent,
    EditVillainComponent,
    DeleteVillainComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'villains', component: VillainsListPageComponent},
      { path: 'villains-new', component: VillainsNewComponent},
      { path: 'edit-villain', component: EditVillainComponent},
      { path: 'delete-villain', component: DeleteVillainComponent},
      { path: '',
        redirectTo: '/villains',
        pathMatch: 'full'
      },
      { path: '**', component: PageNotFoundComponent
      },

    ])
  ],
  providers: [VillainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
