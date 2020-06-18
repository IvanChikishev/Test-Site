<template>
  <form
    class="catalog-filter"
    @submit.prevent="submit"
  >
    <div class="catalog-filter__rooms">
      <label>Комнаты</label>
      <div class="catalog-filter__rooms-controls">
        <input
          v-for="item in rooms"
          :id="item.id"
          :key="item.id"
          v-model="filter.room"
          type="radio"
          :value="item.value"
        >
      </div>
      <div class="catalog-filter__rooms-buttons">
        <button
          v-for="item in rooms"
          :key="item.id"
          type="button"
          class="btn btn--filter"
          :class="{'btn--primary': item.value == filter.room}"
          :aria-label="item.name"
          :title="item.name"
          @click="buttonRooms(item.value)"
        >
          {{ item.value }}
        </button>
      </div>
    </div>
    <div class="controls-slider">
      <label for="floor-min">Комнаты</label>
      <div class="controls-slider__input">
        <input
          id="floor-min"
          v-model.number="filter.floor[0]"
          type="text"
          class="form-control"
        >
        <span>-</span>
        <input
          id="floor-max"
          v-model.number="filter.floor[1]"
          type="text"
          class="form-control"
        >
      </div>
      <VueSlider
        v-model="filter.floor"
        :tooltip="'none'"
        style="padding: 0;"
      />
    </div>
    <div class="controls-slider">
      <label for="square-min">Площадь, <span>м<sup>2</sup></span></label>
      <div class="controls-slider__input">
        <input
          id="square-min"
          v-model.number="filter.square[0]"
          type="text"
          class="form-control"
        >
        <span>-</span>
        <input
          id="square-max"
          v-model.number="filter.square[1]"
          type="text"
          class="form-control"
        >
      </div>
      <VueSlider
        v-model="filter.square"
        :tooltip="'none'"
        style="padding: 0;"
      />
    </div>
    <div class="controls-slider">
      <label for="price-min">Стоимость, <span>млн. р.</span></label>
      <div class="controls-slider__input">
        <input
          id="price-min"
          v-model.number="filter.price[0]"
          type="text"
          class="form-control"
        >
        <span>-</span>
        <input
          id="price-max"
          v-model.number="filter.price[1]"
          type="text"
          class="form-control"
        >
      </div>
      <VueSlider
        v-model="filter.price"
        :tooltip="'none'"
        style="padding: 0;"
      />
    </div>
    <div class="catalog-filter__buttons">
      <button
        type="submit"
        class="btn btn--primary"
        aria-label="Кнопка применения фильтра"
        title="Кнопка применения фильтра"
      >
        Применить
      </button>
      <button
        type="button"
        class="btn btn--empty"
        aria-label="Кнопка сброса фильтра"
        title="Кнопка сброса фильтра"
        @click="clearFilter"
      >
        сбросить фильтр
      </button>
    </div>
  </form>
</template>

<script>

// v-bind="{ min: getDefaultFilter.floor[0], max: getDefaultFilter.floor[1] }"
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import { mapGetters } from 'vuex';

export default {
  name: 'CatalogFilter',
  components: {
    VueSlider,
  },
  data() {
    return {
      rooms: [
        { id: 'studio', value: 'XS', name: 'Квартира студия' },
        { id: 'one-room', value: '1k', name: 'Однокомнатная квартира' },
        { id: 'two-room', value: '2k', name: 'Двухкомнатная квартира' },
        { id: 'three-room', value: '3k', name: 'Трехкомнатная квартира' },
      ],
    };
  },
  computed: {
    ...mapGetters(['getFilter', 'getDefaultFilter']),
    filter() {
      console.log(this.getFilter);
      return this.getFilter;
    },
  },
  methods: {
    buttonRooms(val) {
      this.filter.room = val;
    },
    clearFilter() {
      this.$store.commit('CLEAR_FILTER');
    },
    submit() {
      this.$store.commit('UPDATE_FILTER', this.filter);
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog-filter {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 60px;
  margin-bottom: 50px;
  & label {
    text-transform: uppercase;
    font-family: $font-family-base-bold;
  }
  &__rooms {
    &-controls {
      display: none;
    }
    &-buttons {
      display: flex;
      & button {
        margin-right: 5px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  &__floor {
    &-controls {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      & span {
        margin: 0 5px;
        opacity: .5;
      }
      & input {
        width: 80px;
        height: 40px;
        text-align: center;
      }
    }
  }
}
</style>
