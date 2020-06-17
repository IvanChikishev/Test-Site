export default {
  actions: {
    dataRequest(ctx) {
      const xhr = new XMLHttpRequest();
      const url = 'api/data.json';
      xhr.open('GET', url);
      xhr.send();
      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          ctx.commit('UPDATE_CATALOG', JSON.parse(xhr.responseText));
        }
      });
    },
  },
  state: { catalog: Object },
  mutations: {
    CREATE_ITEM_CATALOG({ catalog }, newItem) {
      catalog.push(newItem);
    },
    UPDATE_CATALOG(state, newCatalog) {
      // eslint-disable-next-line no-param-reassign
      state.catalog = newCatalog;
    },
    UPDATE_ITEM_CATALOG({ catalog }, upItem) {
      let item = catalog.find(({ id }) => id === upItem.id);
      if (item) item = upItem;
    },
    DATELE_ITEM_CATALOG({ catalog }, itemID) {
      catalog.splice(itemID, 1);
    },
  },
  getters: {
    getCatalog(state) { return state.catalog; },
  },
};
