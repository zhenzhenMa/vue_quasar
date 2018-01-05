<template id="child-map">
  <div id="map" :style="style"></div>
</template>

<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=ZihnG0CkPaXzGH4BqWhmYkFzGZwfsQuT"></script>
<script>
  export default{
    data () {
      return {
        style: {
          width: '100%',
          height: this.m.height + 'px'
        }
      }
    },

    props: ['m'],

    mounted () {
      var map = new BMap.Map('map')
      var point = new BMap.Point(this.m.longitude, this.m.latitude)
      map.centerAndZoom(point, 15)
      var marker = new BMap.Marker(point)
      map.addOverlay(marker)
      marker.setAnimation(BMAP_ANIMATION_BOUNCE)
    }
  }
</script>