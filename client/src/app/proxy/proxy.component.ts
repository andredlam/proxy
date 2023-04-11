import { Component, Input, OnInit } from '@angular/core';
import { 
    ControlContainer,
    FormBuilder,
    FormControl,
    FormGroup,
    FormGroupDirective,
    Validators
} from '@angular/forms';

@Component({
    selector: 'app-proxy',
    templateUrl: './proxy.component.html',
    viewProviders: [
        {
            provide: ControlContainer,
            useExisting: FormGroupDirective
        }
    ],
    providers: [
        FormGroupDirective
    ]
})
export class ProxyComponent implements OnInit {

    bmcURL: string = "";
    displayURL: string = "";
    isValid: boolean = false;

    @Input('formgroup') myform: FormGroup;
    // @ts-ignore
    ipaddress: FormControl;

    constructor(fb: FormBuilder) {
        this.myform = fb.group({});
    }

    ngOnInit(): void {
        this.ipaddress = new FormControl('', [
            Validators.required,
            Validators.pattern(("^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"))
        ]);

        this.myform.addControl('ipaddress', this.ipaddress);
    }

    viewBMC() {
        if (!this.ipaddress.invalid) {
            this.isValid = true;
            console.log(this.ipaddress.value);
            this.displayURL = `https://${this.ipaddress.value}`;
        } else {
            this.isValid = false;
        }
    }
}
