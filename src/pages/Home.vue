<template>
  <div class="home">
    <Banner />
    <div class="block block--bg">
      <div class="container container--full">
        <h2 class="title">
          Lorem ipsum dolor sit
        </h2>
        <CatalogFilter />
        <Catalog />
      </div>
    </div>
    <Map />
  </div>
</template>

<script>
import Banner from 'components/Banner.vue';
import CatalogFilter from 'components/CatalogFilter.vue';
import Catalog from 'components/Catalog.vue';
import Map from 'components/Map.vue';

export default {
  name: 'Home',
  components: {
    CatalogFilter,
    Catalog,
    Banner,
    Map,
  },
};
</script>

<style lang="scss" scoped>

</style>
