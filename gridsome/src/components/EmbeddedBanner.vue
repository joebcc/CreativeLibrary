<template>
  <div>
    <a :href="creative.creativeUrl" class="text-lg font-bold">
      {{ creative.title }}
    </a>
    <iframe :src="'..' + creative.creativeUrl" :width="creative.width" :height="creative.height" class="my-2">
    </iframe>
    <div class="flex justify-between text-xs">
      <div v-if="creative.client">
        Client - <span class="client text-base">{{creative.client}}</span>
      </div>
      <div v-if="creative.campaign">
        Campaign - <span class="campaign text-base">{{creative.campaign}}</span>
      </div>
    </div>
    <div class="flex justify-between text-xs">
      <div v-if="creative.height || creative.width">
        Size - <span class="size text-base">{{creative.width ? creative.width : '?'}} x {{creative.height ? creative.height : '?'}}</span>
      </div>
      <!-- <div v-if="creative.date">
        Date - <span class="date text-base">{{creative.date}}</span>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmbeddedBanner',
  props: {
    creative: Object,
  }
}
</script>
