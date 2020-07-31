<template>
  <div class="creativeGallery grid justify-center grid-cols-5 lg:py-16 lg:px-10">
    <div class="sidebar">
      <img src="../assets/april6logo.svg" width="300" class="self-center logo" />

      <div class="my-4">
        Asset Aggregator
      </div>
      <!--! =============== Filters ========================================== -->
      <div id="filters" class="filters text-xs py-4 justify-center items-center">
        <Filtera
          :filter="filters.client"
          key="client"
          name="client"
          v-on:all-toggle="allToggle"
          v-on:option-toggle="optionToggle"
        />
        <Filtera 
          :filter="filters.assettypes"
          key="asset"
          name="assettypes"
          v-on:all-toggle="allToggle"
          v-on:option-toggle="optionToggle"
        />
        
        <!-- <div v-for="(client, clientname) in filters.client.selected" :key="clientname">
          <Filtera 
            v-if="Object.values(filters.client.list[client].list).length > 1"
            :filter="filters.client.list[client]" 
            :name="client" 
            v-on:all-toggle="allToggle"
            v-on:option-toggle="optionToggle" 
          />
        </div> -->
      </div>
    </div>

    <!--! =============== Creatives ========================================== -->
    <div class="">
      <div 
        id="creatives" 
        v-masonry 
        :data-time="time"
        transition-duration="0.3s" 
        item-selector=".item" 
        fit-width="true"
      >
        <div 
          v-for="creative in matchingCreatives" 
          :key="creative.slug"
          :data-time="time"
          class="creative item" 
          v-masonry-tile
          @click="filters.preview = filters.preview === creative.slug ? '' : creative.slug"
          :class="filters.preview === creative.slug ? 'preview' : ''"
        >
          <component
            :is="creative.type === 'AssetBanner' ? creative.type : 'AssetImage'"
            :data-time="time"
            :creative="creative"
            v-if="filters.preview !== creative.slug" 
          />
          <Preview :creative="creative" v-else v-on:remove-preview="filters.preview = ''" />
          <div class="overlay"></div> 
        </div>
      </div>

    </div>

  </div>
</template>

<script>

import Vue from 'vue'
// import VueMasonryWall from "vue-masonry-wall";
export default {
  name: 'CreativeGallery', 
  components: {
    AssetImage: () => import("../components/EmbeddedImage.vue"),
    AssetBanner: () => import("../components/EmbeddedBanner.vue"),
    Filtera: () => import("../components/Filter.vue"),
    Preview: () => import("../components/Preview.vue"),
  },
  props: {
    creatives: Array,
  },
  data() { 
    return {
      time: Date.now(),
      search: '',
      sortBy: '',
      order: 'ascending',
      filters: {
        client: {
          list:{},
          selected: [],
        },
        assettypes: {
          list:{},
          selected: [],
        },
        preview: '',
        // campaign: {
        //   list:[],
        //   selected: 'all',
        // },
        // size: {
        //   list:[],
        //   selected: 'all',
        // },
      },
    }
  },
  computed: {
    matchingCreatives: function () {
      const client = this.filters.client;
      const types = this.filters.assettypes;
      //? check every creative individually
      return this.$props.creatives.filter(function(creative){
        const campaign = client.list[creative.client.slug];
        const type = types.list[creative.type];
        if ((
            !client.selected.length || //? if client is set to any
            client.selected.includes(creative.client.slug) //? or if this creative matches the client 
          ) && (
            !client.selected.length ||
            campaign &&
            (!campaign.selected.length || //? if campaigns are set to all
            campaign.selected.includes(creative.campaign.slug)) //? or if the creative matches the campaign
          ) && (
            !types.selected.length ||
            types.selected.includes(creative.type)
          )
        ) {
          
          //? include in results
          return true;
          

        } else {
          //? do not include in the results
          return false;
        }
      });
    },
    
  },
  mounted() {
    this.redrawGrid();
    setTimeout(this.redrawGrid, 500);
    setTimeout(this.redrawGrid, 1000);

  },
  updated() {
    this.redrawGrid();
  },
  methods: {
    xref(a,b){
      return a.filter(x => b.includes(x));
    },
    redrawGrid() {
      if (typeof this.$redrawVueMasonry === 'function') {
        this.$redrawVueMasonry('#creatives');
      }
    },
    optionToggle(option, name){
      const isCampaign = name !== 'client' && name !== 'assettypes';

      if (isCampaign) {  var filter = this.filters.client.list[name] }
      else { var filter = this.filters[name] }

      //? if the filter was set to any
      if (filter.selected === []) {
        filter.selected = [option]
        // ? set it to the selected option

      //? if the filter was already in place
      } else if (filter.selected.includes(option)) { 
        const index = filter.selected.indexOf(option);
        console.log(name, option, index);
        filter.selected.splice(index, 1);
        //? unselect it by removing from the selected list

      //? otherwise there is already a selection in place
      } else {
        filter.selected.push(option)
        //? so add to it
      }

      if (isCampaign) { this.filters.client.list[name] = filter; } 
      else { this.filters[name] = filter; }

      this.reload();
      this.redrawGrid();
      setTimeout(this.redrawGrid, 500);
    },
    allToggle(name) {
      const isCampaign = name !== 'client' && name !=='assettypes';
      if (isCampaign) {
        this.filters.client.list[name].selected = [];
      } else {
        this.filters[name].selected = [];
      }
      this.redrawGrid();
      setTimeout(this.redrawGrid, 500);
    },
    reload() {
      this.time = Date.now();
    },
    computeCampaigns: function() {
      const creatives = this.$props.creatives;
      var storage = {};
      creatives.forEach(function(creative) {
        let client = creative.client.slug;
        let clientTitle = creative.client.title;
        let campaign = creative.campaign ? creative.campaign.slug : '-na';
        let campaignTitle = creative.campaign ? creative.campaign.title : 'N/A';
        
        storage[client] = storage[client] || { list: {}, selected: [] } ; //Initiate if clientey does not exist
        storage[client].title = clientTitle;
        if (campaign !== undefined){
          // campaign = campaign.replace(/[^\d\w]/, '');
          if (!storage[client].list[campaign]) {
            storage[client].list[campaign]= {
              title: campaignTitle,
              count: 1
            };         
          } else {
            storage[client].list[campaign].count += 1;  
          }
        }
      });
      this.filters.client.list = storage;
    },
    sort(list, sortby) {
      const order = this.order;
      switch(sortby) {
        case 'client':
        case 'campaign':
        case 'size':
          const sorted = list.sort(function(a,b){
            //? if both fields are filled sort alphabetically
            if(a[sortby] && b[sortby]){
              if (
                (order == 'ascending' && a[sortby].toUpperCase() > b[sortby].toUpperCase()) ||
                (order == 'descending' && a[sortby].toUpperCase() < b[sortby].toUpperCase())
              ) {
                return 1
              } else {
                return -1;
              }
            //? if only one options field is filled put that one first
            } else if (a[sortby] || b[sortby]) {
              if (a[sortby]) { return -1 }
              else { return 1 }
            } 
            return -1;
          });
          console.log('sorting', sorted)
          return sorted;
        default:
          return list;
      }
    },
  //!--  Need to compute all possible filters ( find and filter all clients/campaigns/sizes ) -->
  },  
  beforeMount () {
    const VueMasonryPlugin = require('vue-masonry').VueMasonryPlugin
    Vue.use(VueMasonryPlugin)
    if (typeof this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry()
    }
    this.computeCampaigns();
    const assettypes = { list:{}, selected: [] };
    this.creatives.forEach((newval) => {
      if (newval.type){
        if (!assettypes.list[newval.type]) {
          assettypes.list[newval.type] = 1
        } else {
          assettypes.list[newval.type] += 1;
        }
      } 
    });
    this.filters.assettypes = assettypes;

    // this.creatives.forEach(c => {
      // if (c.type === 'animatedBanner') {
      //   // c.type = Banner;
      // }
      // if (c.type === 'animatedBanner') {
      //   c.type = Banner;
      // }
    // })
  }
}
</script>


<style lang="scss">
.creativeGallery {
  grid-template-columns: minmax(100px, 150px) 1fr;
  grid-gap: 2rem;
}
.self-center{
  justify-self: center;
}
#creatives {
  justify-self: center;
  position: relative;
}
.search {
  max-width: 600px;
  width: 100%;
}
.creative {
  // position: relative;
  overflow: hidden; 
  // background: var(--darkblue);
  padding: 10px 0 20px; 
  transition: all .3s ease;

  &:hover{
    background: var(--lightblue);

    .banner-info {
      opacity: 1;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    display: block;
    z-index:99;
  }

  &.preview {
    position: fixed !important;
    width: 100%;
    height: 100%;
    left: 0 !important;
    // right: auto !important;
    top: 0 !important;
    // bottom: auto !important;
    // padding:1em;
    background: rgba(255,255,255,.6);
    cursor: pointer;
    // background: rgba(255,255,255,1);
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
overflow: auto;
    // box-shadow: 5px 5px 0px 8px var(--darkblue);
    // border: 5px solid var(--lightblue);

    .banner-container {
      width: 100%;
    }
    .overlay, .banner-info {
      display: none;
    }
  }

}
</style>

