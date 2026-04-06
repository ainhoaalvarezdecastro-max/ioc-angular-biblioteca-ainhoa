import { ElementApiResponse, ElementCataleg } from '../models/element.model';

export function adaptarElementApi(api: ElementApiResponse): ElementCataleg {
  return {
    id: api.id,
    titol: api.nom,
    descripcio: api.descripcio,
    categoria: api.categoria,
    preu: api.preu,
    imatgeUrl: api.imatge,
    esPopular: api.popular,
    unitats: api.stock
  };
}

export function adaptarElementsApi(apiArray: ElementApiResponse[]): ElementCataleg[] {
  return apiArray.map(adaptarElementApi);
}
