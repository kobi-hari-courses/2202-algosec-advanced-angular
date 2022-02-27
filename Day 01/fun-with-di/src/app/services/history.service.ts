import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    public id: number;
    private history: string[] = [];

    constructor() {
        this.id = Math.floor(Math.random() * 1000000);
    }


    audit(txt: string) {
        this.history.push(txt);
        console.log(this.history);
    }
    
}