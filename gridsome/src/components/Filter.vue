
<template>
  <div 
    :id="name" 
    class="filter" 
  >
    <form :data-time="time">
      <div v-if="!campaign">
        <div class="filter-title">
          {{ name === 'client' ? 'Clients' : 'Assets' }} :
        </div>
        <label 
          :class="(filter.selected.length === 0 ) ? 'selected' : ''"
          :name="name + 'any'" 
          :data-time="time"
          class="mr-4"
        >
          <input 
            :name="name + 'any'" 
            value="all" 
            checked='true' 
            type="checkbox" 
            @click="time = Date.now(), $emit('all-toggle', name)"
          >
          Any
        </label>
      </div>
      <div
        v-for="(option, optionname) in filter.list"
        :key="name + optionname"
      > 
        <label
          :class="(filter.selected.includes(optionname) || !filter.selected.length) ? 'selected ' + optionname : ''"
          :name="name + optionname"
          :data-time="time"
        >
          <input
          type="checkbox"
          :name="name + optionname"
          @click="time = Date.now(), $emit('option-toggle', optionname, name)"
          >
          {{ (optionname.includes('Asset') ? optionname.replace('Asset', '') : option.title) }}
        </label>
        <div
          v-if="name === 'client' && Object.values(filter.list[optionname].list).length > 1"
          class="ml-6 subfilter"
        >
          <Filtered 
            v-show="filter.selected.includes(optionname)"
            :key="optionname"
            :filter="filter.list[optionname]" 
            :name="optionname" 
            :campaign="true"
            v-on:option-toggle="c"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
function aa(s) {
  window.console.log(s);
}
export default {
  name: 'Filtered',
  props: {
    filter: Object,
    name: String,
    campaign: Boolean,
  },
  data () { return {
    time: Date.now(),
 }},
  computed: {
    selected() {
      if (this.$props.name === 'client') {
        return this.$props.filter.selected
      }
    },
    list() {
      if (this.$props.name === 'client') {
        return this.$props.filter.list
      }
    }
  },
  methods: {
    c(option, name) {
      console.log(option,name,'double emitting');
      this.$emit('option-toggle', option, name, 'aaaaa')
    },
    a(s) {
      aa(s);
    },
    b(s) {
      console.log(s,'double emitting');
    }
  }
}
</script>
