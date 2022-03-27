import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, Injector, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';
import { MessageComponent } from '../components/message/message.component';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(
    private elem: ElementRef, 
    private template: TemplateRef<any>, 
    private vcref: ViewContainerRef, 
    private componentFactoryResolver: ComponentFactoryResolver, 
    private injector: Injector

    ) {
    console.log('App Demo created');
    console.log(elem);
    console.log(template);

    for (let i = 0; i < 2; i++) {
      // const viewRef = template.createEmbeddedView(null);
      // vcref.insert(viewRef);  
      vcref.createEmbeddedView(template);
    }

    const factory = componentFactoryResolver.resolveComponentFactory(MessageComponent);

    // const component: ComponentRef<MessageComponent> = factory.create(injector);
    // vcref.insert(component.hostView);
    const component = vcref.createComponent<MessageComponent>(factory, 1);

    component.instance.title = 'Bye';
    component.instance.color = 'Green';




  }

}
