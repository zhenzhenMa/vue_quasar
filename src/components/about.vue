<template>
  <div>
    <main>
      <!-- <q-gallery-carousel dots infinite autoplay :src="gallery" class="banner">
      </q-gallery-carousel> -->
      <!-- <img src="~assets/quasar-logo-full.svg" alt="banner"> -->
      <map-container></map-container>
      <!-- <data-table></data-table> -->
      <!-- <hello-gkk></hello-gkk> -->
      <router-view></router-view>
    </main>
    <q-fab class="fixed add-btn" color="secondary" @click.native="$router.push('/add-ticket')"> 
    </q-fab>
  </div>
</template>

<script>
import {
  QFab
} from 'quasar'

import MapContainer from '@/map/mapContainer.vue'
// import DataTable from '@/ticket/dataTable.vue'
// import HelloGkk from '@/Hello.vue'

export default {
  components: {
    QFab,
    MapContainer
    // DataTable
    // HelloGkk
  },

  data () {
    return { xx: 0 }
  }
}
</script>

<style lang="stylus">
</style>
