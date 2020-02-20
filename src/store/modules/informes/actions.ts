import Vue from "vue";
import { ActionContext, ActionTree } from "vuex";
import { Informes } from "@/store/modules/informes/types";
import { User } from "@/store/modules/auth/types";
import { RootState } from "@/store/types";
import { AxiosResponse } from "axios";
import store from "@/store/index";

type InformesActionContext = ActionContext<Informes, RootState>;
type InformesActionTree = ActionTree<Informes, RootState>;

export const actions: InformesActionTree = {

    async getInformes(context: InformesActionContext) {
        try {
          const token: string = store.getters["authModule/getToken"];
          const res: AxiosResponse = await Vue.axios({
            method: "GET",
            url: "informe",
            headers: {
              Authorization: "Bearer " + token
            }
          });
          res.status == 200 ? context.commit("setInformes", res.data) : "";
        } catch (error) {}
      },

};
