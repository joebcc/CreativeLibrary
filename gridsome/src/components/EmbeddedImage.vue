<template>
  <div
    class="image-container grid justify-center align-baseline"
    :class="fullsize && 'fullsize'"
  >
    <img
      :id="creative.slug"
      :src="`${creative.creativeUrl}`"
    />
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
          >
            - {{creative.width ? creative.width : '?'}} x {{creative.height ? creative.height : '?'}}
          </span>
        </span>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.image-container {
  width: 330px;
  transition: 0.5s ease all;
  img {
    max-width: 300px;
  }
  &:hover {
    .banner-info {
      opacity: 1;
    }
  }
  &.fullsize {
    width: 100%;

    img {
      max-width: 100%;
    }
  }
}
.banner-info {
  opacity: 0;
  transition: 0.5s ease all;
  // position: absolute;
  width: 100%;
  padding: 8px 0px 0px;
}
</style>

<script>
export default {
  name: 'EmbeddedImage',
  props: {
    creative: Object,
    fullsize: Boolean,
  },
  computed: {
    sizeDiff() {
      // if (this.$props.fullsize) { return 1 };
      // const width = this.$props.creative.width
      // if ( width > 300 ) {
      //   const ratio =  300 / width;
      //   return ratio;
      // }
      return 1;
    },
    ratio() {
      return `scale(${this.sizeDiff})`;
    }
  }
}
</script>
