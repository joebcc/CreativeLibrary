<template>
  <div class="creativeGallery">
    <div class="filters flex justify-between text-xs p-4">
      <!-- {{filters}} -->
      <div v-for="(filter, name) in filters" :key="name" :id="name">
        {{name}} : 
        <form class="text-base">
          <label><input :name="name+'any'" value="all" checked='true' type="checkbox" @click="allToggle(name)">Any</label>
          <div v-if="filter.selected !== 'all'">
            <label
              v-for="(option, oi) in filter.list"
              :key="name + oi"
            >
              <input type="checkbox" :name="name + oi" @click="optionToggle(option, filter.selected)">
              {{option}}
            </label>
          </div>
        </form>
      </div>
    </div>
    <div class="flex flex-vertical flex-wrap p-4">
      <div 
        v-for="creative in matchingCreatives" 
        :key="creative.slug"
        class="p-4 rounded mx-auto text-center mt-8 bg-gray-200"
      >
        <Banner :creative="creative"/>
      </div>
    </div>
  </div>
</template>

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
      filters: {
        client: {
          list:[],
          selected: 'all',
        },
        campaign: {
          list:[],
          selected: 'all',
        },
        assetType: {
          list:[],
          selected: 'all',
        },
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
          console.log('failed empty fasfd', searchValue, creativeValue)
            check = false; 
            return
          }
          // console.log('passedasdfasdf', searchValue, creativeValue)

          //! searchValue - Array
          //! creativeValue - Array || String
          if (searchValue.length === 1){
            if (creativeValue.includes(searchValue)) { 
              console.log('passing test', searchValue, creativeValue)
              return
            } else {
              check = false;
              return
            }
          } else {
          // } else if (Array.isArray(creativeValue)) {
            // [hp, rockwell] - 'hp'
            console.log(searchValue.filter(val => creativeValue.includes(val)).length > 0, 'test 2')
            if (searchValue.filter(val => creativeValue.includes(val)).length > 0) {
              console.log('passing second test')
              return
            } 

            check = false;
            return
            
          } 
          console.log('endo', searchValue, creativeValue, check)
        })
        console.log('endtot', check)

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
      filterFinder('assetType', creative.assetType)
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
