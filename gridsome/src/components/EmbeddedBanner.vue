<template>
  <div
    class="banner-container grid justify-center align-baseline"
    :style="{ height: (creative.height * sizeDiff) +'px' }"
  >
    <iframe
      :id="creative.slug"
      :src="'..' + creative.creativeUrl"
      :width="creative.width"
      :height="creative.height"
      :style="{ transform: ratio }"
    ></iframe>
    <!-- <div class="text-xs banner-info">
        <span v-if="creative.client">
          <span class="client text-base font-bold">{{creative.client}}</span>
        </span>
        <span v-if="creative.campaign">
          <span class="campaign text-base font-bold">, {{creative.campaign}}</span>
        </span>
        <span v-if="creative.height || creative.width" class="mb-2">
          <span
            class="size text-base font-bold"
          >- {{creative.width ? creative.width : '?'}} x {{creative.height ? creative.height : '?'}}</span>
        </span>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.banner-container {
  width: 330px;
  transition: 0.5s ease all;
}
.banner-info {
  opacity: 0;
  transition: 0.5s ease all;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 15px 8px;
  z-index: 100;
}
.banner-container:hover {
  .banner-info {
    opacity: 1;
  }
}
iframe {
  transform-origin: top;
  z-index: 10;
}
</style>

<script>
export default {
  name: 'EmbeddedBanner',
  props: {
    creative: Object,
    fullsize: Boolean,
  },
  computed: {
    sizeDiff() {
      if (this.$props.fullsize) { return 1 };
      const width = this.$props.creative.width
      if ( width > 300) {
        const ratio =  300 / width;
        return ratio;
      }
      return 1;
    },
    ratio() {
      return `scale(${this.sizeDiff})`;
    }
  },
  mounted() {
    const slug = this.$props.creative.slug;
    setTimeout(forceHidden, 300);
    setTimeout(forceHidden, 1000);
    setTimeout(forceHidden, 5000);

    function forceHidden() {
      if(window.frames[slug]) {
        window.frames[slug].contentDocument.querySelector('html').style.overflow = 'hidden';

      }
    }
  }
}
</script>
