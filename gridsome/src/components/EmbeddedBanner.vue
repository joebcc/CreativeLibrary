<template>
  <div class="banner-container">
    <iframe :src="'..' + creative.creativeUrl" :width="creative.width" :height="creative.height">
    </iframe>
    <div class="text-xs banner-info">
      <a :href="creative.creativeUrl" class="text-base font-bold mt-2 block">
        {{ creative.title }}
      </a>
      <div v-if="creative.client">
        Client - <span class="client text-base">{{creative.client}}</span>
      </div>
      <div v-if="creative.campaign">
        Campaign - <span class="campaign text-base">{{creative.campaign}}</span>
      </div>
      <div v-if="creative.height || creative.width" class="mb-2">
        Size - <span class="size text-base">{{creative.width ? creative.width : '?'}} x {{creative.height ? creative.height : '?'}}</span>
      </div>
      <!-- <div v-if="creative.date">
        Date - <span class="date text-base">{{creative.date}}</span>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  background: var(--lightblue);
}
  .banner-info{
    overflow: hidden;
    display: block;
    max-height: 0;
    opacity: 0;
    transition: .5s ease all;
  }
  .banner-container:hover .banner-info {
    max-height: 1000px;
    opacity: 1;
  }
  iframe {
    max-width: 100%;
  }
</style>

<script>
export default {
  name: 'EmbeddedBanner',
  props: {
    creative: Object,
  }
}
</script>
