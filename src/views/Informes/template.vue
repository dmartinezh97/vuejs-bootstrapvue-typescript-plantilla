<template>
  <div class="container-fluid">
    <template>
      <div>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="informes"
        ></b-pagination>
        <b-table id="informes" :per-page="perPage" :current-page="currentPage" responsive small hover :items="informes" :fields="columnas" caption-top>
          <template v-slot:table-caption>Informes</template>
        </b-table>
      </div>
    </template>
    <!-- <b-card-group>
      <b-card header-tag="header">
        <template v-slot:header>
          <h6 class="mb-0 text-center">Informes</h6>
        </template>

      </b-card>
    </b-card-group> -->
  </div>
</template>

<style scoped>

</style>