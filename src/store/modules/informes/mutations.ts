import { MutationTree } from "vuex";
import { Informes } from "@/store/modules/informes/types";
import { User } from "@/store/modules/auth/types";

type InformesMutationTree = MutationTree<Informes>;

export const mutations: InformesMutationTree = {
    setInformes(state: Informes, informes: object) {
        const objInformes: object = [];
        let limite: number = 0;
        //@ts-ignore
        informes.forEach(element => {
            if (limite<50) {
            //@ts-ignore
            objInformes.push({
                id: element.IDIntern,
                data: element.DATA,
                n_of: element.N_OF,
                descripcio_of: element.DESCRIPCIO_OF,
                desclin: element.DESCLIN,
            });
            limite++;
        }
        });
        state.informes = objInformes;
      },
};
