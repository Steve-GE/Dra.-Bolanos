import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-top-header',
    templateUrl: './top-header.component.html',
    styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

    constructor(
        public router: Router,
        private translate: TranslateService
    ) { }

    ngOnInit(): void {
        this.translate.setDefaultLang('es'); // idioma por defecto
        this.translate.use('es'); // uso del idioma seleccionado
    }

    switchLanguage(language: string) {
        this.translate.use(language);
      }

}