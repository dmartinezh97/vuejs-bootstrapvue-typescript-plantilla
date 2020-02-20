import { Component, Vue, Watch } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { Route } from "vue-router";
import { User } from "@/store/modules/auth/types";
import Template from "./template.vue";
import moment from "moment";

Component.registerHooks(["beforeRouteEnter"]);

@Component({
  mixins: [Template]
})
export default class Fichar extends Vue {
  @State("isLogged", { namespace: "authModule" }) isLogged!: boolean;
  @State("user", { namespace: "authModule" }) user!: User;
  @State("clientes", { namespace: "ficharModule" }) clientes!: object;
  @Action("getClientes", { namespace: "ficharModule" }) getClientes!: Function;
  @Watch("filtroCliente", { immediate: true })
  actualizarFiltroCliente(): void {
    this.getClientes(this.filtroCliente);
  }
  @Watch("getClienteTrim", { immediate: true })
  actualizarCliente(): void {
    this.cliente != "" ? this.actualizarFiltroOf() : "";
  }
  @State("ofs", { namespace: "ficharModule" }) ofs!: object;
  @Action("getOfs", { namespace: "ficharModule" }) getOfs!: Function;
  @Watch("filtroOf")
  actualizarFiltroOf(): void {
    this.getOfs({
      codcli: this.cliente,
      filtro: this.filtroOf
    });
  }

  @State("detalles", { namespace: "ficharModule" }) detalles!: object;
  @Action("getDetalles", { namespace: "ficharModule" }) getDetalles!: Function;
  @Watch("filtroDetall", { immediate: true })
  actualizarfiltroDetall(): void {
    this.getDetalles(this.filtroDetall);
  }

  @State("matriculas", { namespace: "ficharModule" }) matriculas!: object;
  @Action("getMatriculas", { namespace: "ficharModule" })
  getMatriculas!: Function;

  @Action("registrarFeina", { namespace: "ficharModule" })
  registrarFeina!: Function;

  public cliente: string = "";
  public filtroCliente: string = "";
  public of: string = "";
  public filtroOf: string = "";
  public data: string = "";
  public mananaEntrada: string = "";
  public mananaSalida: string = "";
  public tardeEntrada: string = "";
  public tardeSalida: string = "";
  public detalle: string = "";
  public filtroDetall: string = "";
  public observ: string = "";
  public dietes: number = 5;
  public matricula: string = "";
  public kms: number = 32;
  public poblacio: string = "Tecelmac";
  public altres: number = 0;
  public definicio: string = "";
  public radio: string = "";
  public radios: object = [
    { text: "Pernoctació", value: "p" },
    { text: "Guàrdia", value: "g" }
  ];
  public opciones: Array<String> = [];
  public options: object = [
    { text: "Dietes", value: "dietes" },
    { text: "Km", value: "km" },
    { text: "Altres", value: "altres" }
  ];
  public dietesPagat: string = "";
  public kmsPagat: string = "";
  public altresPagat: string = "";

  //Comprobar si está loggeado
  async beforeRouteEnter(from: Route, to: Route, next: any) {
    next((vm: Fichar) => {
      if (!vm.isLogged) {
        next("/login");
      }
    });
  }

  mounted() {
    this.getMatriculas();
  }

  async checkForm(): Promise<void> {
    let result = await this.$validator.validateAll();

    if (result) {
      this.opciones.forEach(element => {
        switch (element) {
          case "dietes":
            this.dietesPagat = "T";
            break;
          case "kms":
            this.kmsPagat = "T";
            break;
          case "altres":
            this.altresPagat = "T";
            break;
        }
      });

      let resultado = await this.registrarFeina({
        username: this.user.username,
        cliente: this.cliente,
        of: this.of,
        data: this.data,
        mananaEntrada: this.mananaEntrada,
        mananaSalida: this.mananaSalida,
        tardeEntrada: this.tardeEntrada,
        tardeSalida: this.tardeSalida,
        totalH: this.getTotalHoras,
        detalle: this.detalle,
        filtroDetall: this.filtroDetall,
        observ: this.observ,
        dietes: this.dietes,
        matricula: this.matricula,
        kms: this.kms,
        poblacio: this.poblacio,
        altres: this.altres,
        definicio: this.definicio,
        radio: this.radio,
        dietesPagat: this.dietesPagat,
        kmsPagat: this.kmsPagat,
        altresPagat: this.altresPagat
      });
      if (resultado) {
        this.$bvToast.toast("Feina registrada correctamente", {
          title: this.$store.state.appName,
          variant: 'success',
          autoHideDelay: 5000,
          appendToast: true,
        })
      }
    }
  }

  get getClienteTrim(): string {
    return this.cliente.trim();
  }

  get getTotalHoras(): number {
    var fechaManana1 = moment(
      this.data + " " + this.mananaEntrada,
      "YYYY-MM-DD HH:mm"
    );
    var fechaManana2 = moment(
      this.data + " " + this.mananaSalida,
      "YYYY-MM-DD HH:mm"
    );
    var fechaTarde1 = moment(
      this.data + " " + this.tardeEntrada,
      "YYYY-MM-DD HH:mm"
    );
    var fechaTarde2 = moment(
      this.data + " " + this.tardeSalida,
      "YYYY-MM-DD HH:mm"
    );
    if (
      fechaTarde1.hours() > parseInt(this.mananaEntrada) &&
      fechaTarde2.hours() < parseInt(this.mananaEntrada)
    ) {
      var fechaTarde2 = moment(
        this.formatDate(this.data) + " " + this.tardeSalida,
        "YYYY-MM-DD HH:mm"
      );
    }

    var mananaTotal = fechaManana2.diff(fechaManana1, "m");
    var TardeTotal = fechaTarde2.diff(fechaTarde1, "m");

    var ret = mananaTotal + TardeTotal;
    ret = parseFloat((ret / 60).toFixed(2));
    if(isNaN(ret)) return 0;
    else return ret;
  }

  formatDate(date: string): string {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + (d.getDate() + 1),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
}
