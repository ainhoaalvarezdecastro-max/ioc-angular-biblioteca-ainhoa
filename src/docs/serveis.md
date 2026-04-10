# Serveis

## ElementService

Servei encarregat de la comunicació amb l'API.

### Mètodes
- obtenirPopulars(): carrega els elements populars
- cercar(terme): filtra elements per nom

### Estats
- carregant: indica si hi ha una petició activa
- error: missatge d’error
- elements: dades carregades

## PreferitsService

Servei per gestionar els elements preferits.

### Funcionalitats
- Afegir preferits
- Eliminar preferits
- Comprovar si és preferit

### Persistència
Les dades es guarden a localStorage amb la clau:
'preferits-cataleg'