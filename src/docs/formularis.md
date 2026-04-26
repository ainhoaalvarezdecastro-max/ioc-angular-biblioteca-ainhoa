# Formularis reactius

## Estructura del formulari

El formulari utilitza Reactive Forms amb un FormGroup que conté el camp:

- termeCerca: FormControl amb validacions síncrones i asíncrones

## Validacions síncrones

- mínim 2 caràcters (Validators.minLength)
- màxim 50 caràcters (Validators.maxLength)

Els errors es mostren només quan el camp està touched.

## Validació asíncrona

S'ha implementat un validador asíncron amb RxJS que simula una crida HTTP amb delay de 500 ms.

- Mostra "Validant..." mentre s'està executant
- Retorna un error { sensResultats: true } si no hi ha coincidències

## Debounce

S'utilitza debounceTime(400) per evitar crides contínues a l'API mentre l'usuari escriu.

## Funcionalitats addicionals

- Botó "Netejar" visible només quan hi ha text
- Cerca automàtica mentre s'escriu