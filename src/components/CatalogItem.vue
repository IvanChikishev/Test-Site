<template>
  <div class="catalog-body">
    <div
      v-for="item in catalog"
      :key="item.id"
      class="calatog-item"
    >
      <div class="catalog-item__header">
        <div class="catalog-item__floor">
          {{ item.floor }}
        </div>
        <div class="catalog-item__sizes">
          {{ item.rooms }} комната - {{ item.square }}м<sup>2</sup>
        </div>
      </div>
      <div class="catalog-item__body">
        <div class="catalog-item__number">
          {{ item.building_id }}
        </div>
        <div class="catalog-item__img">
          <img
            :src="item.plan"
            :alt="item.name"
            :title="item.name"
          >
        </div>
      </div>
      <div class="catalog-item__footer">
        <div class="catalog-item__price">
          <div class="catalog-item__price-full">
            {{ `${item.price_full}р.` }}
          </div>
          <div class="catalog-item__price-meter">
            {{ `${item.price_full / item.square} р. за м` }}<sup>2</sup>
          </div>
        </div>
        <button
          type="button"
          class="catalog-item__detailed btn"
          aria-label="Button to go to the detailed material of the apartment"
          title="Button to go to the detailed material of the apartment"
        >
          Подробнее
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  computed: {
    // ...mapGetters(['getCatalog']),
  },
};
</script>

<style lang="scss" scoped></style>
