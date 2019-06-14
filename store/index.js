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
        noTransitionElts: []
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
        }
    },

    actions: {
        // ...
    }

})

export default store
