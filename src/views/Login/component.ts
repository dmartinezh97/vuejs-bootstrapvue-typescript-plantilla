import { Component, Vue, Watch } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { Route } from "vue-router";
import { User } from "@/store/modules/auth/types";
import Template from "./template.vue";

const namespace: string = 'authModule'

Component.registerHooks(["beforeRouteEnter"]);

@Component({
  mixins: [Template]
})
export default class Login extends Vue {
  public user: Partial<User> = {};
  @State("isLogged", { namespace }) isLogged!: boolean;
  @State("error", { namespace }) error!: boolean;
  @State("errorMessage", { namespace }) errorMessage!: string;
  @Action("login", { namespace }) login!: Function;


  signIn(): void {
    this.$validator.validateAll().then((result) => {
      if(result){
        this.login(this.user).then(() => {
          if (!this.error) {
            this.$router.push("/fichar");
          }else{
            this.$bvToast.toast(`${this.errorMessage}`, {
              title: this.$store.state.appName,
              variant: 'danger',
              autoHideDelay: 5000,
              appendToast: true,
            })
          }
        });
      }
    });
  }

  async beforeRouteEnter(from: Route, to: Route, next: any) {
    next((vm: Login) => {
      if (vm.isLogged) {
        next("/");
      }
    });
  }

}
