import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import VuexPersist from "@/plugins/vuex-persist";
import { RootState } from "@/store/types";
import { authModule } from '@/store/modules/auth';
import { ficharModule } from '@/store/modules/fichar';
import { informesModule } from '@/store/modules/informes';
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    appName: "TEC0131",
    appVersion: "0.0.1"
  },
  modules: {
    authModule,
    ficharModule,
    informesModule,
  },
  // @ts-ignore
  plugins: [VuexPersist.plugin]
};

export default new Vuex.Store<RootState>(store);
