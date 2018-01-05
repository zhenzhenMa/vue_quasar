<template>
  <div>
    <main>
      <ChartBar :class="className" :id="id" :style="{height:height,width:width}"></ChartBar>
    </main>
  </div>
</template>

<script>
import ChartBar from '@/charts/bar.vue'

export default {
  components: {
    ChartBar
  },

  data () {
    return {
      className: 'mazhen',
      id: 'mazhenID',
      width: '500px',
      height: '500px'
    }
  }
}
</script>

<style lang="stylus">
</style>
