<template>
  <div>
    <main>
      <map-container :m="giveData"></map-container>
    </main>
  </div>
</template>

<script>
import MapContainer from '@/map/mapContainer.vue'

export default {
  components: {
    MapContainer
  },

  data () {
    return {
      giveData: {
        height: 700,
        longitude: 116.404,
        latitude: 39.915
      }
    }
  }
}
</script>

<style lang="stylus">
</style>
