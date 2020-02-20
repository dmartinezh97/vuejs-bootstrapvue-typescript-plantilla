import Vue from "vue";
import { ActionContext, ActionTree } from "vuex";
import { Fichar } from "@/store/modules/fichar/types";
import { User } from "@/store/modules/auth/types";
import { RootState } from "@/store/types";
import { AxiosResponse } from "axios";
import store from "@/store/index";

type FicharActionContext = ActionContext<Fichar, RootState>;
type FicharActionTree = ActionTree<Fichar, RootState>;

export const actions: FicharActionTree = {

  async getClientes(context: FicharActionContext, filtro: string) {
    try {
      const token: string = store.getters["authModule/getToken"];
      const res: AxiosResponse = await Vue.axios({
        method: "GET",
        url: "feina/clientes",
        headers: {
          Authorization: "Bearer " + token
        },
        params: {
          filtro: filtro
        }
      });
      res.status == 200 ? context.commit("setClientes", res.data) : "";
    } catch (error) {}
  },

  async getOfs(context: FicharActionContext, data: object) {
    try {
      const token: string = store.getters["authModule/getToken"];
      const res: AxiosResponse = await Vue.axios({
        method: "GET",
        url: "feina/ofs",
        headers: {
          Authorization: "Bearer " + token
        },
        params: {
          // @ts-ignore
          codcli: data.codcli.trim(),
          // @ts-ignore
          filtro: data.filtro
        }
      });
      res.status == 200 ? context.commit("setOfs", res.data) : "";
    } catch (error) {}
  },

  async getDetalles(context: FicharActionContext, filtro: string) {
    try {
      const token: string = store.getters["authModule/getToken"];
      const res: AxiosResponse = await Vue.axios({
        method: "GET",
        url: "feina/detalles",
        headers: {
          Authorization: "Bearer " + token
        },
        params: {
          filtro: filtro
        }
      });
      res.status == 200 ? context.commit("setDetalles", res.data) : "";
    } catch (error) {}
  },

  async getMatriculas(context: FicharActionContext) {
    try {
      const token: string = store.getters["authModule/getToken"];
      const res: AxiosResponse = await Vue.axios({
        method: "GET",
        url: "feina/matriculas",
        headers: {
          Authorization: "Bearer " + token
        }
      });
      res.status == 200 ? context.commit("setMatriculas", res.data) : "";
    } catch (error) {}
  },

  async registrarFeina(context: FicharActionContext, data: object): Promise<any> {
    try {
      const token: string = store.getters["authModule/getToken"];
      const res: AxiosResponse = await Vue.axios({
        method: "POST",
        url: "feina/registrar",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        },
        data: JSON.stringify(data)
      });
      return true;
    } catch (error) { return false; }
  },

};
