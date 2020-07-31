<template>
  <div>
    <CreativeGallery :creatives="$context.creative" />
  </div>
</template>

<script>
export default {
  name: 'CreativeArchive',
  components: {
    CreativeGallery: () => import("../components/CreativeGallery.vue")
  }
}
</script>
<style  scoped>
@import "../styles/styles.scss";

</style>