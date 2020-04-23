<template>
  <div class="creative">
    {{ $context.title }} 
    <a :href="$context.creativeUrl" target="_blank">
      Open banner in separate tab
    </a>
    <Banner :creative="$context"/>
  </div>
</template>

<script>
export default {
  name: 'CreativeSingle',
  components: {
    Banner: () => import("../components/EmbeddedBanner.vue")
  }
}
</script>
