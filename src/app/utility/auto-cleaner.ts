import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
@Component({
    template: ''
  })
export class AutoCleaner implements OnDestroy {

    protected subs: Subscription[] = [];

    ngOnDestroy(): void {
        this.subs.forEach(x => {
            if (x) {
                x.unsubscribe();
                x = null;
            }
        })
    }
}