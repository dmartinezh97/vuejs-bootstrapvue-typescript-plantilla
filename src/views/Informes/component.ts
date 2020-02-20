import { Component, Vue, Watch } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { Route } from "vue-router";
import { User } from "@/store/modules/auth/types";
import Template from "./template.vue";

Component.registerHooks(["beforeRouteEnter"]);

@Component({
  mixins: [Template]
})
export default class Fichar extends Vue {
  @State("isLogged", { namespace: "authModule" }) isLogged!: boolean;
  @State("user", { namespace: "authModule" }) user!: User;

  @State("columnas", { namespace: "informesModule" }) columnas!: object;
  @State("informes", { namespace: "informesModule" }) informes!: object;
  @Action("getInformes", { namespace: "informesModule" }) getInformes!: Function;

  public currentPage: number = 0;
  public perPage: number = 10;
  public totalItems: number = 0;

  //Comprobar si está loggeado
  async beforeRouteEnter(from: Route, to: Route, next: any) {
    next((vm: Fichar) => {
      if (!vm.isLogged) {
        next("/login");
      }
    });
  }

  mounted(){
    this.getInformes();
  }

}
