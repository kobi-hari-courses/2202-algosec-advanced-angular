import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    public id: number;
    private history: string[] | null = null;

    constructor() {
        this.id = Math.floor(Math.random() * 1000000);
    }

    delay(): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, 3000));
    }

    async init(): Promise<void> {
        console.log('History init started');
        await this.delay();
        this.history = [];
        console.log('History init completed');
    }

    audit(txt: string) {
        this.history!.push(txt);
        console.log(this.history);
    }
    
}