import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    connected = false;

    listForProtocol = ['http', 'https'];
    public perfectUrl = false;
    public odooUrl;
    public selectedProtocol;
    private dbList: Array<{
        dbName: string;
    }> = [];
    private selectedDatabase;
    private email;
    private password;

    constructor() {

    }

    logout() {

    }

    VerifierUrl() {

    }
}
