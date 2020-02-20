<template>
  <div id="nav" class="mb-0">
    <b-navbar toggleable="lg" fixed="top" variant="white">
      <b-navbar-brand to="/">TEC0131</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto" v-if="!isLogged">
          <b-nav-item to="/login">Inicia sessió</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
          <b-nav-item active-class="active" to="/fichar">Fichar</b-nav-item>
          <!-- <b-nav-item active-class="active" to="/informes">Informes</b-nav-item> -->
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>{{ user.username }}</em>
            </template>
            <b-dropdown-item @click="logout()">Tancar sessió</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>