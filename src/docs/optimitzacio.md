# Optimització del rendiment

En aquest exercici he aplicat diferents tècniques per millorar el rendiment de l'aplicació Angular, especialment en la visualització de llistes amb molts elements.

---

## Estratègia ChangeDetectionStrategy.OnPush

He aplicat l'estratègia `OnPush` a components presentacionals per reduir el nombre de comprovacions de canvi que fa Angular.

### Components amb OnPush:

- TargetaElementComponent  
- DetallComponent  

### Motiu:

Aquests components només reben dades mitjançant `@Input()`, per tant no necessiten que Angular revisi constantment si hi ha canvis.

Amb `OnPush`, Angular només actualitza el component quan:
- Canvia la referència de les dades d'entrada
- Es produeix un esdeveniment intern

Això ajuda a millorar el rendiment, sobretot quan hi ha molts elements a la pantalla.

---

## Virtualització de llistes amb Angular CDK

Per optimitzar la visualització de llistes grans, he utilitzat el mòdul `ScrollingModule` de l'Angular CDK.

### Implementació:

He substituït el `*ngFor` per:

```html
<cdk-virtual-scroll-viewport itemSize="100" style="height: 400px">
  <div *cdkVirtualFor="let element of elementService.elements()">
    <app-targeta-element [element]="element"></app-targeta-element>
  </div>
</cdk-virtual-scroll-viewport>