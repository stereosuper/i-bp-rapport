import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: () => ({
        scrollTop: null,
        window: {
            w: null,
            h: null
        },
        noTransitionElts: [],
        activeFilter: 0,
        overflowScrollable: true,
        modalOn: false
    }),
    mutations: {
        setScrollTop(state, scrollTopValue) {
            state.scrollTop = scrollTopValue;
        },
        setScrollEnd(state, isScrollEnded) {
            state.scrollEnded = isScrollEnded;
        },
        setWindow(state, newWindow) {
            state.window = newWindow;
        },
        setNoTransitionElts(state, elts) {
            state.noTransitionElts = state.noTransitionElts.concat([...elts]);
        },
        setActiveFilter(state, activeFilter) {
            state.activeFilter = activeFilter;
        },
        toggleOverflowScrollable(state) {
            state.overflowScrollable = !state.overflowScrollable;
        },
        setModalOn(state, modalOnValue) {
            state.modalOn = modalOnValue;
        }
    },

    actions: {
        // ...
    }

})

export default store
