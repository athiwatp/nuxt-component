<template>
  <h1>About</h1>
</template>

<script>
import * as d3 from 'd3'

export default {
  mounted () {
    console.log(
      d3.select('h1')
        .append('svg')
        .attr('width', 200)
        .attr('height', 100)
      )
  }
}
</script>
