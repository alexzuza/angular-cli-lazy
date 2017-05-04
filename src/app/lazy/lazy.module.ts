import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'lazy-comp',
    template: `
        <h2>Lazy loaded counter {{ counter }}</h2>
        <button (click)="increment()">Increment</button>
    `
})
export class LazyComponent {
    counter = 1;

    increment() {
        this.counter++;
    }
}

@NgModule({
    imports: [CommonModule],
    declarations: [LazyComponent],
    entryComponents: [LazyComponent]
})
export class LazyModule {
    static entry = LazyComponent;
}
