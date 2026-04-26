# Aplicació Angular Biblioteca Ainhoa Álvarez

## Descripció

Aplicació Angular que permet visualitzar un catàleg d'elements, fer cerques, veure detalls i gestionar preferits amb autenticació.

---

## Mapa de rutes

| Ruta        | Component          | Accés  |
| ----------- | ------------------ | ------ |
| /cataleg    | CatalegComponent   | Públic |
| /cerca      | CercaComponent     | Públic |
| /detall/:id | DetallComponent    | Públic |
| /preferits  | PreferitsComponent | Privat |
| /login      | LoginComponent     | Públic |

---

## Execució en local

```bash
git clone [https://github.com/ainhoaalvarezdecastro-max/ioc-angular-biblioteca-ainhoa]
cd ioc-angular-biblioteca-ainhoa
npm install
ng serve
```

Obrir: http://localhost:4200

---

## Build de producció

```bash
ng build --configuration production
```

El bundle generat es troba a la carpeta `dist/`.

---

## Credencials de prova

Email: [admin@test.com](mailto:admin@test.com)
Contrasenya: 1234
