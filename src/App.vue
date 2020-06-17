<template>
  <div id="app">
    <Header
      @toggleMenu="toggleMenu"
      @toggleFeedback="toggleFeedback"
    />
    <main :class="{ '--show-menu': showMenu }">
      <div class="content">
        <router-view />
        <Feedback :show-feedback="showFeedback" />
      </div>
    </main>
    <!-- <div class="sidebar-blocks">
      <div class="sidebar-blocks__left">
        Left-link
      </div>
      <div class="sidebar-blocks__rigth">
        Right-link
      </div>
    </div> -->
    <Footer />
  </div>
</template>

<script>
import Header from 'components/Header.vue';
import Footer from 'components/Footer.vue';
import Feedback from 'components/Feedback.vue';

export default {
  components: {
    Header,
    Footer,
    Feedback,
  },
  data() {
    return {
      showMenu: false,
      showFeedback: false,
    };
  },
  methods: {
    toggleMenu(showMenu) {
      this.showMenu = showMenu;
    },
    toggleFeedback(showFeedback) {
      this.showFeedback = showFeedback;
    },
  },
};
</script>

<style lang="scss" scope>
#app {
  padding: 0 80px;
  main {
    height: calc(100vh - 160px);
    transition: 0.3s;
    &.--show-menu {
      padding-top: 90px;
    }
    & .content {
      background-color: $white;
      height: 100%;
      border-radius: 10px;
      position: relative;
      overflow-y: auto;
    }
  }
}

.left-link,
.right-link {
  position: absolute;
  top: 400px;
}

@media screen and (max-width: 992px) {
  #app {
    padding: 0 12px;
  }
}
@media screen and (max-width: 768px) {
  #app main {
    &.--show-menu {
      padding-top: 280px;
    }
  }
}
</style>
