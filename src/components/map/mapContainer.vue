<template id="child-map">
  <div id="map" :style="style"></div>
</template>

<script>
  import BMap from 'BMap'
  export default{
    data () {
      return {
        style: {
          width: '100%',
          height: this.m.height + 'px'
        }
      }
    },

    props: ['m'], // 被调用时可配置的参数

    mounted () {
      this.baiduMap()
    },

    methods: {
      baiduMap () {
        var map = new BMap.Map('map')
        var point = new BMap.Point(this.m.longitude, this.m.latitude)
        map.centerAndZoom(point, 15)
        // var mapType = new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP, BMAP_PERSPECTIVE_MAP]})
        // var topLeftControl = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT}) // 左上角，添加比例尺
        // var topLeftNavigation = new BMap.NavigationControl() // 左上角，添加默认缩放平移控件
        // map.addControl(mapType)
        // map.addControl(topLeftControl)
        // map.addControl(topLeftNavigation)
        map.enableScrollWheelZoom(true)

        var marker = new BMap.Marker(point)
        map.addOverlay(marker)
        // marker.setAnimation(BMAP_ANIMATION_BOUNCE)
      }
    }
  }
</script>