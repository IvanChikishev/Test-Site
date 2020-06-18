/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
export default {
  actions: {
    async dataRequest(ctx) {
      await new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        const url = 'api/data.json';
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('readystatechange', () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            ctx.commit('UPDATE_CATALOG', JSON.parse(xhr.responseText));
            ctx.commit('UPDATE_DEFAULT_FILTER', JSON.parse(xhr.responseText));
            ctx.commit('CLEAR_FILTER');
          }
          resolve();
        });
      });
    },
  },
  state: {
    catalog: null,
    filter: null,
    defaultFilter: null,
  },
  mutations: {
    CREATE_ITEM_CATALOG({ catalog }, newItem) {
      catalog.push(newItem);
    },
    UPDATE_CATALOG(state, newCatalog) {
      state.catalog = newCatalog;
    },
    UPDATE_ITEM_CATALOG({ catalog }, upItem) {
      let item = catalog.find(({ id }) => id === upItem.id);
      if (item) item = upItem;
    },
    DATELE_ITEM_CATALOG({ catalog }, itemID) {
      catalog.splice(itemID, 1);
    },

    UPDATE_FILTER(state, newFilter) {
      state.filter = newFilter;
    },
    UPDATE_DEFAULT_FILTER(state, filter) {
      let floor = []; let square = []; let price = [];
      filter.forEach((element) => {
        floor.push(element.floor);
        square.push(element.square);
        price.push(element.price_full);
      });

      floor = {
        min: Math.min.apply(null, floor),
        max: Math.max.apply(null, floor),
      };
      square = {
        min: Math.floor(Math.min.apply(null, square)),
        max: Math.ceil(Math.max.apply(null, square)),
      };
      price = {
        min: Math.trunc((Math.min.apply(null, price) / 1000000) * 10) / 10,
        max: Math.trunc((Math.max.apply(null, price) / 1000000) * 10) / 10,
      };

      state.defaultFilter = {
        room: 'XS',
        floor: [floor.min, floor.max],
        square: [square.min, square.max],
        price: [price.min, price.max],
      };
    },
    CLEAR_FILTER(state) {
      state.filter = state.defaultFilter;
    },
  },
  getters: {
    getCatalog(state) { return state.catalog; },
    getFilter(state) { return state.filter; },
    getDefaultFilter(state) { return state.defaultFilter; },
  },
};
