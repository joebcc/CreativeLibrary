<template>
  <div class="creativeGallery">
    <!-- <div class="flex justify-between p-4 pt-8">
      <img src="../assets/april6-logo.svg" width="300" />
      <div class="search grid items-end">
        <input type="text" v-model="search" class="border w-full p-2">
      </div> 
    </div> -->
    <div class="filters grid grid-cols-5 text-xs p-4 gap-2 text-center justify-center items-center">
      <img src="../assets/april6logo.svg" width="300" class="col-span-2" />
      <!-- {{filters}} -->
      <div 
        v-for="(filter, name) in filters" 
        :key="name" 
        :id="name" 
        class="filter bg-gray-200 rounded-lg p-4" 
      >
        <form class="text-base">
          {{name}} : 
          <label :class="filter.selected == 'all' ? 'selected' : ''">
            <input 
              :name="name+'any'" 
              value="all" 
              checked='true' 
              type="checkbox" 
              @click="allToggle(name)"
            >
            Any
          </label>
          <transition name="fade" tag="div">
            <div v-if="filter.selected !== 'all'">
              <label
                v-for="(option, oi) in filter.list"
                :key="name + oi"
                :class="filter.selected.includes(option) ? 'selected' : ''"
              >
                <input type="checkbox" :name="name + oi" @click="optionToggle(option, filter.selected)">
                {{option}}
              </label>
            </div>
          </transition>
        </form>
      </div>
    </div>
    <transition-group name="fade" tag="div" class="flex flex-vertical flex-wrap p-4">
      <div 
        v-for="creative in matchingCreatives" 
        :key="creative.slug"
        class="mx-auto text-center mt-8"
      >
        <Banner :creative="creative"/>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.search {
  max-width: 600px;
  width: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
  max-height: 1000px
}
.fade-enter, .fade-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
  max-height: 0px
}
</style>

<script>
export default {
  name: 'CreativeGallery', 
  components: {
    Banner: () => import("../components/EmbeddedBanner.vue")
  },
  props: {
    creatives: Array,
  },
  data() { 
    return {
      search: '',
      filters: {
        client: {
          list:[],
          selected: 'all',
        },
        campaign: {
          list:[],
          selected: 'all',
        },
        // assetType: {
        //   list:[],
        //   selected: 'all',
        // },
        size: {
          list:[],
          selected: 'all',
        },
      },
    }
  },
  computed: {
    matchingCreatives: function () {
      const filters = this.filters;
      const filtered = this.$props.creatives.filter(function(creative){
        var check = true;

        Object.entries(filters).forEach(function(filter, fi){
          const filterName = filter[0]; //! String
          const searchValue = filter[1].selected; //! 'all' || Array
          if (searchValue === 'all') { return }

          const creativeValue = creative[filterName]; //! String || Array
          // console.log('passed 345345345 asdfasdf', searchValue, creativeValue)
          if (
            (Array.isArray(searchValue) && searchValue.length === 0)
            || creativeValue === undefined 
            || creativeValue === null
          ) { 
            console.log('failed empty', searchValue, creativeValue)
            check = false; 
            return
          }

          //! searchValue - Array
          //! creativeValue - Array || String
          //? when there's only 1 search query check creative vs search directly
          if (searchValue.length === 1){
            if (creativeValue.includes(searchValue)) { 
              return
            } else {
              check = false;
              return
            }
          //? otherwise cross reference the arrays with a filter
          } else {
            if (searchValue.filter(val => creativeValue.includes(val)).length > 0) { return } // return as true
            check = false;
            return
            
          } 
          // console.log('endo', searchValue, creativeValue, check)
        })
        // console.log('endtot', check)

        // if (check === true) {console.log('passed', creative.slug) } 
        // else { console.log('failed', creative.slug)  }
        return check;
      });
      // console.log('filtered', filtered);
      return filtered;
    }
  },
  created() {
    const filterFinder = this.filterFinder;
    this.$props.creatives.forEach(function(creative){
      filterFinder('client', creative.client)
      filterFinder('campaign', creative.campaign)
      // filterFinder('assetType', creative.assetType)
      filterFinder('size', creative.size)
    })
  },
  methods: {
    filterFinder(filterType, filterObject){
      // filterObject = filterObject. //! need to filter string to make it play nice with js
      // console.log('checking ', filterType, ' for ', filterObject)
      if (!this.filters[filterType].list.includes(filterObject) && filterObject != null) {
        this.filters[filterType].list.push(filterObject);
        // console.log('found ', filterObject, ' - adding to ', filterType, ' : ',  this.filters[filterType])
      }
    },
    optionToggle(option, filter){
      if (filter.includes(option)) {
        filter.splice(filter.indexOf(option), 1) 
      } else{
         filter.push(option)
      }
    },
    allToggle(name) {
      if (this.filters[name].selected === 'all') {
        this.filters[name].selected = [];
      } else {
        this.filters[name].selected = 'all';
      }
    }
  },
  //!--  Need to compute all possible filters ( find and filter all clients/campaigns/sizes ) -->
}
</script>
