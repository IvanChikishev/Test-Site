<template>
  <nav
    class="menu"
    :class="{ '--show': showMenu }"
  >
    <router-link
      v-for="item in formattedMenu"
      :key="item.id"
      :to="{ name: item.name }"
      :title="item.label"
      :aria-label="item.label"
      class="menu-item"
    >
      {{ item.label }}
    </router-link>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: { showMenu: Boolean },
  computed: {
    ...mapGetters({
      menu: 'getMenu',
    }),
    formattedMenu() {
      return this.menu.filter(({ visible }) => visible).sort((a, b) => a.sort - b.sort);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  width: 100%;
  padding: 0 1.25rem;
  margin-top: 20px;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
  &-item {
    font-family: $font-family-link;
    font-size: $font-size-md;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1px solid $primary;
    margin: 0 1.5625rem;
    letter-spacing: 3px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .menu {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    &-item {
      margin: 0;
      margin-bottom: 30px;
      width: fit-content;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
