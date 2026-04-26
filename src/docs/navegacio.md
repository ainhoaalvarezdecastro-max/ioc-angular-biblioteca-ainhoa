# Navegació

## Mapa de rutes

| Path          | Component          | Accés  |
| ------------- | ------------------ | ------ |
| /cataleg      | CatalegComponent   | Públic |
| /cerca        | CercaComponent     | Públic |
| /detall/:id   | DetallComponent    | Públic |
| /preferits    | PreferitsComponent | Privat |
| /login        | LoginComponent     | Públic |
| / (redirect)  | → /cataleg         | Públic |
| ** (wildcard) | → /cataleg         | Públic |

---

## Configuració de la navegació

La navegació de l'aplicació l'he configurat utilitzant el sistema de rutes d'Angular amb `provideRouter`.

### provideRouter

Al fitxer `app.config.ts` he utilitzat `provideRouter(routes)` per definir les rutes principals de l'aplicació.

---

### RouterOutlet

El component principal (`AppComponent`) inclou `<router-outlet>` per mostrar dinàmicament els components segons la ruta activa.

---

### RouterLink

Per navegar entre pàgines he utilitzat directives `routerLink` en el component de navegació (`NavegacioComponent`), permetent accedir a:

* Catàleg
* Cerca
* Preferits
* Login

---

### Protecció de rutes

La ruta `/preferits` està protegida amb un `authGuard`, que impedeix l'accés si l'usuari no està autenticat.

Si l'usuari no està loguejat, es redirigeix automàticament a `/login`.

---

## Conclusions

La configuració de la navegació permet una estructura clara i escalable, amb rutes públiques i privades, així com una experiència d'usuari fluida gràcies al sistema de routing d'Angular.
