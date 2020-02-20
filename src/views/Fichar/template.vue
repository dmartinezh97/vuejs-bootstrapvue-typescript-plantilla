<template>
  <div class="container h-100 form-fichar">
    <div class="row justify-content-center align-items-center h-100">
      <b-card-group class="shadow-lg mt-navbar mb-3 rounded">
        <b-card header-tag="header">
          <template v-slot:header>
            <h6 class="mb-0 text-center">Registrar Feina</h6>
          </template>
          <!--  -->
          <b-form @submit.prevent="checkForm">
            <!--  -->
            <b-row class="my-1">
              <b-col sm="2" align-self="center">
                <label>Client</label>
              </b-col>
              <b-col sm="10">
                <b-form-select name="cliente" v-model="cliente" :options="clientes" v-validate="'required'" :class="{'is-invalid': errors.has('cliente')}"></b-form-select>
                <!-- <b-form-invalid-feedback>Selecciona un client</b-form-invalid-feedback> -->
                <!-- <b-form-input type="text" v-model="getClienteTrim" readonly></b-form-input> -->
                <b-icon icon="search" font-scale="2.25" variant="dark" class="icon-input" v-b-modal.modal-cliente></b-icon>
              </b-col>
            </b-row>
            <!--  -->
            <b-row class="my-1">
              <b-col sm="2" align-self="center">
                <label>OF</label>
              </b-col>
              <b-col sm="10">
                <b-form-select name="of" v-model="of" :options="ofs"></b-form-select>
                <!-- <b-form-invalid-feedback>Selecciona una of</b-form-invalid-feedback> -->
                <!-- <b-form-input type="text" v-model="of" readonly></b-form-input> -->
                <b-icon icon="search" font-scale="2.25" variant="dark" class="icon-input" v-b-modal.modal-of></b-icon>
              </b-col>
            </b-row>
            <!--  -->
            <b-row class="my-1">
              <b-col sm="2" align-self="center">
                <label>Data</label>
              </b-col>
              <b-col sm="10">
                <b-form-input name="data" type="date" v-model="data" v-validate="'required'" :class="{'is-invalid': errors.has('data')}"></b-form-input>
                <!-- <b-form-invalid-feedback>Selecciona una data</b-form-invalid-feedback> -->
              </b-col>
            </b-row>
            <!--  -->
            <b-row class="my-2">
              <b-col sm="12" md="2" align-self="center">
                <p class="align-middle mb-0">Horari</p>
              </b-col>
              <b-col sm="6" md="2">
                <p class="text-center mb-0">Entrada</p>
                <b-form-input type="time" name="mananaEntrada" v-model="mananaEntrada" v-validate.immediate="'required_if:radioValidate,p'" :class="{'is-invalid': errors.has('mananaEntrada')}"></b-form-input>
              </b-col>
              <b-col sm="6" md="2">
                <p class="text-center mb-0">Salida</p>
                <b-form-input type="time" name="mananaSalida" v-model="mananaSalida" v-validate.immediate="'required_if:radioValidate,p'" :class="{'is-invalid': errors.has('mananaSalida')}"></b-form-input>
              </b-col>
              <b-col sm="6" md="2">
                <p class="text-center mb-0">Entrada</p>
                <b-form-input type="time" name="tardeEntrada" v-model="tardeEntrada" v-validate.immediate="'required_if:radioValidate,p'" :class="{'is-invalid': errors.has('tardeEntrada')}"></b-form-input>
              </b-col>
              <b-col sm="6" md="2">
                <p class="text-center mb-0">Salida</p>
                <b-form-input type="time" name="tardeSalida" v-model="tardeSalida" v-validate.immediate="'required_if:radioValidate,p'" :class="{'is-invalid': errors.has('tardeSalida')}"></b-form-input>
              </b-col>
              <b-col sm="12" md="2">
                <p class="text-center mb-0">Total H</p>
                <b-form-input type="text" v-model="getTotalHoras" readonly></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="2" align-self="center">
                <label>Detall</label>
              </b-col>
              <b-col sm="10">
                <b-form-select name="detall" v-model="detalle" :options="detalles" v-validate.immediate="'required_if:radioValidate,p'" :class="{'is-invalid': errors.has('detall')}"></b-form-select>
                <!-- <b-form-invalid-feedback>¿?</b-form-invalid-feedback> -->
                <!-- <b-form-input type="text" v-model="detalle" readonly></b-form-input> -->
                <b-icon icon="search" font-scale="2.25" variant="dark" class="icon-input" v-b-modal.modal-detall></b-icon>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="2" align-self="center">
                <label>Observ.</label>
              </b-col>
              <b-col sm="10">
                <b-form-textarea rows="3" v-model="observ" name="observ" v-validate.immediate="'required_if:radioValidate,p'" :class="{'is-invalid': errors.has('observ')}"></b-form-textarea>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="2" md="2" align-self="center">
                <label>Dietes</label>
              </b-col>
              <b-col sm="4" md="4">
                <b-input-group size="md" append="€">
                  <b-form-input type="number" v-model="dietes" min="0" step="0.1" name="dietes" v-validate.immediate="'required_if:radioValidate,p'" :class="{'is-invalid': errors.has('dietes')}"></b-form-input>
                </b-input-group>
              </b-col>
              <b-col sm="2" md="2" align-self="center">
                <label>Matricula</label>
              </b-col>
              <b-col sm="4" md="4">
                <b-form-select v-model="matricula" :options="matriculas" name="matricula" v-validate.immediate="'required_if:radioValidate,p'" :class="{'is-invalid': errors.has('matricula')}"></b-form-select>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="2" md="2" align-self="center">
                <label>Kms</label>
              </b-col>
              <b-col sm="4" md="4">
                <b-input-group size="md" append="Kms">
                  <b-form-input type="number" v-model="kms" min="0" step="0.1" name="kms" v-validate.immediate="'required_if:radioValidate,p'" :class="{'is-invalid': errors.has('kms')}"></b-form-input>
                </b-input-group>
              </b-col>
              <b-col sm="2" md="2" align-self="center">
                <label>Població</label>
              </b-col>
              <b-col sm="4" md="4">
                <b-form-input type="text" v-model="poblacio" name="poblacio" v-validate.immediate="'required_if:radioValidate,p'" :class="{'is-invalid': errors.has('poblacio')}"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="2" md="2" align-self="center">
                <label>Altres</label>
              </b-col>
              <b-col sm="4" md="3">
                <b-input-group size="md" append="€">
                  <b-form-input type="number" v-model="altres" min="0" step="0.1" name="altres" v-validate.immediate="'required_if:radioValidate,p'" :class="{'is-invalid': errors.has('altres')}"></b-form-input>
                </b-input-group>
              </b-col>
              <b-col sm="2" md="2" align-self="center">
                <label>Definició</label>
              </b-col>
              <b-col sm="4" md="5">
                <b-form-input type="text" v-model="definicio" name="definicio" v-validate.immediate="'required_if:radioValidate,p'" :class="{'is-invalid': errors.has('definicio')}"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="6">
                <b-form-checkbox
                    v-for="option in options"
                    v-model="opciones"
                    :key="option.value"
                    :value="option.value"
                    inline
                  >
                    {{ option.text }}
                  </b-form-checkbox>
              </b-col>
              <b-col sm="6" align-self="center">
                <b-form-group>
                  <b-form-radio-group
                    ref="radioValidate"
                    name="radio"
                    v-model="radio"
                    :options="radios"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-button-group>
              <b-button type="reset" variant="warning">Netejar</b-button>
              <b-button type="submit" variant="info">Enviar</b-button>
            </b-button-group>
            <!--  -->
            <!--  -->
            <!-- <b-form-group label="Client:">
              <b-form-input v-model="cliente" :options="clientes" required readonly></b-form-input>
            </b-form-group> -->
          </b-form>
          <!--  -->
        </b-card>
      </b-card-group>
    </div>

    <div id="modals">
      <!-- MODAL CLIENTES -->
      <b-modal id="modal-cliente" centered title>
        <b-form-group label="Filtre:">
          <b-form-input type="text" v-model="filtroCliente" autocomplete="off"></b-form-input>
        </b-form-group>
        <b-form-select v-model="cliente" :options="clientes" :select-size="5"></b-form-select>
      </b-modal>
      <!-- MODAL OF -->
      <b-modal id="modal-of" centered title>
        <b-form-group label="Filtre:">
          <b-form-input type="text" v-model="filtroOf" autocomplete="off"></b-form-input>
        </b-form-group>
        <b-form-select v-model="of" :options="ofs" :select-size="5"></b-form-select>
      </b-modal>
      <!-- MODAL DETALL -->
      <b-modal id="modal-detall" centered title>
        <b-form-group label="Filtre:">
          <b-form-input type="text" v-model="filtroDetall" autocomplete="off"></b-form-input>
        </b-form-group>
        <b-form-select v-model="detalle" :options="detalles" :select-size="5"></b-form-select>
      </b-modal>
    </div>
  </div>
</template>
<style scoped>
.form-fichar {
  max-width: 800px;
}
.form-fichar .form-group{
  position: relative;
}
.icon-input {
  position: absolute;
  bottom: 0;
  right: 1rem;
  top: 0;
  z-index: 500;
}
</style>