import { Informes } from "@/store/modules/informes/types";

export const state: Informes = {
    informes: [],
    columnas: [
        { key: 'id', label: 'ID', sortable: true},
        { key: 'data', label: 'Data', sortable: true},
        { key: 'n_of', label: 'Nº Of', sortable: true},
        { key: 'descripcio_of', label: 'Descripcio Of', sortable: true},
        { key: 'desclin', label: 'Desclin', sortable: true},
    ],
};
