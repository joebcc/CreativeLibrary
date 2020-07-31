
<template>
  <div id="filters" class="filters grid grid-cols-3 text-xs p-4 gap-2 text-center justify-center items-center">

    <!-- <div class="flex justify-between p-4 pt-8">
      <img src="../assets/april6-logo.svg" width="300" />
      <div class="search grid items-end">
        <input type="text" v-model="search" class="border w-full p-2">
      </div> 
    </div> -->
    
    <Filtera :filter="filters.client" name="client" v-on:all-togglea="$emit('all-toggleb', 'client')" v-on:option-togglea="$emit('option-toggleb')"  />
    <!-- <div v-for="(client, clientname) in filters.client.selected" :key="clientname"> -->
      <!-- <Filtera :filter="filters.client[clientname]" name="campaign"/> -->
    <!-- </div> -->


    <!-- <div class="filter bg-gray-200 rounded-lg p-4" >
      <div>
        Sort By: 
        <select v-model="sortBy" class="text-base text-black px-2 py-1">
          <option value="client" selected>Client</option>
          <option value="campaign">Campaign</option>
          <option value="size">Size</option>
        </select>
      </div>
      <div class="mt-2">
        Order: 
        <select v-model="order" class="text-base text-black px-2 py-1">
          <option value="ascending" selected>Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </div> -->

  </div>
</template>

<script>
export default {
  name: 'Filters',
  props: {
    filters: Object,
  },
  components: {
    Filtera: () => import("../components/Filter.vue")
  },
}
</script>
