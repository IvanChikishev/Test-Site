<template>
  <div class="map-block">
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, sed do eiusmod
    </p>
    <br>
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, sed do eiusmod
    </p>
    <yandex-map
      :coords="coords"
      :zoom="13"
      :controls="{}"
      class="map"
    >
      <ymap-marker
        marker-id="123"
        :coords="coords"
        :balloon-template="balloonTemplate"
        :icon="markerIcon"
      />
    </yandex-map>
    <flag />
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import flag from '../assets/icons/maps-and-flags.svg';

export default {
  name: 'Map',
  components: { yandexMap, ymapMarker, flag },
  data: () => ({
    coords: [59.939095, 30.315868],
    balloonTemplate: `
      <h1>Hi, everyone!</h1>
    `,
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: flag,
      imageSize: [43, 43],
      imageOffset: [0, 0],
      contentOffset: [0, 15],
    },
  }),
};
</script>

<style lang="scss" scoped>
.map {
  margin: 60px 0;
  height: 410px;
}
</style>
