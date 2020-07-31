<template>
  <div class="creative-preview" >

    <a :href="creative.creativeUrl" target="_blank" class="grid justify-center items-center text-center">
      <p class="text-lg font-bold font-darkblue mb-4">{{ creative.title }}</p>
      <p class="mb-6">
        <span class="text-sm font-gray" v-if="creative.client">Client: </span>
        <span class="text-2xl font-bold font-lightblue">{{ creative.client.title }} </span>
        <span class="ml-6 text-sm font-gray" v-if="creative.campaign && creative.campaign.slug !== '-na'"> Campaign: </span>
        <span class="text-2xl font-bold font-lightblue" v-if="creative.campaign && creative.campaign.slug !== '-na'">{{ creative.campaign.title }} </span>
        <span class="ml-6 text-sm font-gray" v-if="creative.size"> Size: </span>
        <span class="text-2xl font-bold font-lightblue">{{ creative.size }} </span>
      </p>
    </a>
    <component
      :is="creative.type === 'AssetBanner' ? creative.type : 'AssetImage'"
      :creative="creative"
      :fullsize=true
      class="mb-4"
    />
  </div>      
</template>

<style lang="scss">
  .creative-preview {
    // height: 100%;
    cursor:pointer;
    background: white;
    justify-content: center;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid var(--lightblue);
    align-self: baseline;
    margin-top: auto;
    margin-bottom: auto;
  }
</style>

<script>
export default {
  name: 'EmbeddedBanner',
  components: {
    AssetBanner: () => import("../components/EmbeddedBanner.vue"),
    AssetImage: () => import("../components/EmbeddedImage.vue"),
  },
  props: {
    creative: Object,
  }
}
</script>
