<template>
  <div class="catalog">
    <div
      v-for="item in catalog"
      :key="item.id"
      class="catalog-item"
    >
      <div class="catalog-item__header">
        <div class="catalog-item__floor">
          {{ `${item.floor} этаж` }}
        </div>
        <div class="catalog-item__sizes">
          {{ item.rooms }} комната <span>-</span> {{ item.square }}м<sup>2</sup>
        </div>
      </div>
      <div class="catalog-item__body">
        <div class="catalog-item__number">
          <span>№{{ item.building_id }}</span>
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
            {{ `${item.price_full.toLocaleString()}р.` }}
          </div>
          <div class="catalog-item__price-meter">
            {{ `${Math.round(item.price_full / item.square).toLocaleString()} р. за м`
            }}<sup>2</sup>
          </div>
        </div>
        <button
          type="button"
          class="catalog-item__detailed btn btn--primary"
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
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getCatalog', 'getFilter']),
    catalog() {
      let catalog = (this.getCatalog) ? this.getCatalog : [];
      const filter = (this.getFilter) ? this.getFilter : [];
      if (this.getCatalog) {
        catalog = catalog.filter((el) => {
          const room = el.short === filter.room;
          const floor = el.floor >= filter.floor[0] && el.floor <= filter.floor[1];
          const square = el.square >= filter.square[0] && el.square <= filter.square[1];
          console.log(el.square >= filter.square[0], el.square <= filter.square[1]);
          console.log(room, floor, square);
          return room && floor && square;
        });
      }
      return catalog;
    },
  },
  created() {
    this.$store.dispatch('dataRequest');
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  &-item {
    position: relative;
    background-color: $white;
    padding: 10px;
    border-radius: 10px;
    font-family: $font-family-base-bold;
    font-size: $font-size-sm;
    width: 270px;
    height: 365px;
    transition: .3s;
    &:hover {
      box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.25);
      & .catalog-item__body {
        height: 200px;
      }
      & .catalog-item__detailed {
        opacity: 1;
        visibility: visible;
      }
    }
    &__header {
      display: flex;
      justify-content: space-between;
    }
    &__floor {
      opacity: 0.5;
    }
    &__sizes span {
      opacity: 0.5;
    }
    &__body {
      border: 1px solid $gray-300;
      border-radius: 5px;
      height: 250px;
      transition: .3s;
      position: relative;
    }
    &__number {
      position: absolute;
      right: 0;
      & span {
        padding: 5px 10px;
        border-bottom: 1px solid $gray-300;
        border-left: 1px solid $gray-300;
        border-radius: 0 5px;
      }
    }
    &__img {
      height: 100%;
      padding: 31px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      & img {
        height: 100%;
      }
    }
    &__price {
      margin-top: 10px;
      text-align: right;
      &-full {
        font-size: $font-size-lg;
      }
      &-meter {
        font-size: $font-size-sm;
        opacity: .5;
      }
    }
    &__detailed {
      position: absolute;
      bottom: 10px;
      width: calc(100% - 20px);
      opacity: 0;
      visibility: hidden;
      transition: .3s;
    }
  }
}

@media screen and (max-width: 1465px) {
  .catalog {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 992px) {
  .catalog {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 768px) {
  .catalog {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 576px) {
  .catalog {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
