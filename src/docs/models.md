# Models

## ElementApiResponse

Representa la estructura de dades tal com arriba de l’API.

- id: string
- nom: string
- descripcio: string
- categoria: string
- preu: number
- imatge: string
- popular: boolean
- stock: number

---

## ElementCataleg

Model utilitzat a l’aplicació després de l’adaptació.

- id: string
- titol: string
- descripcio: string
- categoria: string
- preu: number
- imatgeUrl: string
- esPopular: boolean
- unitats: number

## Taula de mapeig API → Model intern

| API (ElementApiResponse) | Model (ElementCataleg) | Tipus |
|--------------------------|------------------------|--------|
| id | id | string |
| nom | titol | string |
| descripcio | descripcio | string |
| categoria | categoria | string |
| preu | preu | number |
| imatge | imatgeUrl | string |
| popular | esPopular | boolean |
| stock | unitats | number |