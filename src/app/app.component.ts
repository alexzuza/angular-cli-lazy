import {
    Component, Injector, NgModuleFactory, OnInit, SystemJsNgModuleLoader, ViewChild,
    ViewContainerRef
} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
    title = 'Angular cli Example SystemJsNgModuleLoader.load';

    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

    constructor(private loader: SystemJsNgModuleLoader, private inj: Injector) {}

    ngOnInit() {
        this.loader.load('app/lazy/lazy.module#LazyModule').then((moduleFactory: NgModuleFactory<any>) => {
            const entryComponent = (<any>moduleFactory.moduleType).entry;
            const moduleRef = moduleFactory.create(this.inj);

            const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
            this.container.createComponent(compFactory);
        });
    }
}
