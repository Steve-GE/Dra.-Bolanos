import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Router } from '@angular/router';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

    mytime: Date = new Date();

    constructor(
        public ngxSmartModalService: NgxSmartModalService,
        public router: Router
    ) { }

    ngOnInit(): void {}

}