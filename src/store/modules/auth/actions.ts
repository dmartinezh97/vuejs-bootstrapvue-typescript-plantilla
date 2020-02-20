import Vue from "vue";
import { ActionContext, ActionTree } from "vuex";
import { AuthState, User } from "@/store/modules/auth/types";
import { RootState } from "@/store/types";
import { AxiosResponse } from "axios";

type AuthActionContext = ActionContext<AuthState, RootState>;
type AuthActionTree = ActionTree<AuthState, RootState>;

export const actions: AuthActionTree = {
  async login(context: AuthActionContext, payload: User): Promise<any> {
    try {
      const response: AxiosResponse = await Vue.axios({
        method: "POST",
        url: "/login/authenticate",
        data: payload
      });
        payload.token = response.data;
        context.commit("setUser", payload);
    } catch (e) {
      context.commit("authError", e.message);
    } finally {}
  }
};
