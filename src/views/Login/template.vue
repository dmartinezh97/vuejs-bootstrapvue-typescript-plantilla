<template>
  <div class="container h-100">
    <div class="row justify-content-center align-items-center h-100">
      <b-form id="formLogin" class="shadow-lg p-4 mt-navbar mb-3 bg-white rounded" @submit.prevent="signIn">
        <b-form-group id="usuari" label="Usuari" label-for="usuari">
          <b-form-input
            id="usuari"
            type="text"
            name="usuari"
            v-model="user.username"
            v-validate="'required'"
            :class="{'is-invalid': errors.has('usuari')}"
          ></b-form-input>
          <b-form-invalid-feedback></b-form-invalid-feedback>
        </b-form-group>
        <b-form-group id="contrasenya" label="Contrasenya" label-for="contrasenya">
          <b-form-input
            id="contrasenya"
            type="password"
            name="contrasenya"
            v-model="user.password"
            v-validate="'required'"
            :class="{'is-invalid': errors.has('contrasenya')}"
          ></b-form-input>
          <b-form-invalid-feedback></b-form-invalid-feedback>
        </b-form-group>
        <b-button type="submit" class="float-right" squared variant="info">Inicia sessió</b-button>
      </b-form>
    </div>
  </div>
</template>


<style scoped>
#login {
  height: 100%;
}
#formLogin {
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  background-color: white;
}
</style>