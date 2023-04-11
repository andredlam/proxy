import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit(): void {

    }
}
