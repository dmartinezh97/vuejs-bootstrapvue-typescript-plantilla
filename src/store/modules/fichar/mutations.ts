import { MutationTree } from "vuex";
import { Fichar } from "@/store/modules/fichar/types";
import { User } from "@/store/modules/auth/types";

type FicharMutationTree = MutationTree<Fichar>;

export const mutations: FicharMutationTree = {
  setClientes(state: Fichar, clientes: object) {
    const objClientes: object = [];
    //@ts-ignore
    clientes.forEach(element => {
      //@ts-ignore
      objClientes.push({
        value: element.CODCLI.trim(),
        text: element.NOMCLI
      });
    });
    state.clientes = objClientes;
  },

  setOfs(state: Fichar, ofs: object) {
    const objOfs: object = [];
    //@ts-ignore
    ofs.forEach(element => {
      //@ts-ignore
      objOfs.push({
        value: element.CodOF.trim(),
        text: element.Descripcio
      });
    });
    state.ofs = objOfs;
  },

  setDetalles(state: Fichar, detalles: object) {
    const objDetalles: object = [];
    //@ts-ignore
    detalles.forEach(element => {
      //@ts-ignore
      objDetalles.push({
        //value: element.idDetall,
        value: element.Descripcio,
        text: element.Descripcio
      });
    });
    state.detalles = objDetalles;
  },

  setMatriculas(state: Fichar, matriculas: object) {
    const objMatriculas: object = [];
    //@ts-ignore
    matriculas.forEach(element => {
      //@ts-ignore
      objMatriculas.push({
        value: element.Vehicle,
        text: element.Vehicle
      });
    });
    state.matriculas = objMatriculas;
  },
};
