<template>
  <div class="news-list" :key="page">
    <nuxt-link :to="'/cards/' + (page - 1)">Previous</nuxt-link>
    <nuxt-link :to="'/cards/' + (page + 1)">Next</nuxt-link>
    Hey Card {{ page }}
  </div>
</template>

<script>
export default {
  transition (to, from) {
    if (!from) return 'slide-left'
    return +to.params.page < +from.params.page ? 'slide-right' : 'slide-left'
  },
  asyncData ({ route }) {
    return {
      page: +route.params.page || 1
    }
  }
}
</script>

