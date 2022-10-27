import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ApiRepository, REST_URL } from "./api.repository";

@NgModule({
    imports: [HttpClientModule],
    providers: [ApiRepository, { 
        provide: REST_URL, useValue: `http://${location.hostname}:8080` 
    }]
})
export class RepositoryModule { }