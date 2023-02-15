import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Router } from '@angular/router';

@Component({
    selector: 'app-why-choose-us',
    templateUrl: './why-choose-us.component.html',
    styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService,
        public router: Router
    ) { }

    ngOnInit(): void {}

}