<template>
  <div class="banner">
    <div class="banner-content">
      <div class="banner-title">
        Lorem ipsum dolor, consectetur <br>
        adipiscing elit
      </div>
      <div class="banner-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 160px);
  background: url('~images/banner.jpg') center no-repeat;
  &-content {
    padding: 0 30px;
  }
  &-title {
    font-family: $font-family-base-medium;
    font-size: $font-size-title;
    line-height: $line-height-title;
    text-transform: uppercase;
    text-align: center;
  }
  &-subtitle {
    font-size: $font-size-md;
    font-family: $font-family-subtitle;
    text-align: center;
  }
}

@media screen and (max-width: 576px) {
  .banner {
    background: url('~images/banner-mobile.jpg') center bottom no-repeat;
      &-content {
      padding: 0 20px;
    }
  }
}
</style>
