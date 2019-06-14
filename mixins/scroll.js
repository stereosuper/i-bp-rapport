import {
    requestAnimFrame
} from '~/assets/js/utils';

export default {
    data() {
        return {
            scrollTop: null,
            event: null,
            timeoutScroll: null,
            scrollEnd: true
        };
    },
    watch: {
        loading(val) {
            if (val) this.$store.commit('setScrollTop', 0);
        }
    },
    computed: {
        loading() {
            return this.$store.state.loading;
        }
    },
    methods: {
        scrollHandler: function () {
            this.scrollTop = window.pageYOffset || window.scrollY;

            if (this.scrollEnd) {
                this.scrollEnd = false;
                this.$store.commit('setScrollEnd', false);
            }

            this.$store.commit('setScrollTop', this.scrollTop);
            clearTimeout(this.timeoutScroll);

            this.timeoutScroll = setTimeout(() => {
                this.onScrollEnd();
            }, 66);
        },
        launchScroll: function (e) {
            this.event = e;
            requestAnimFrame(this.scrollHandler);
        },
        initScroll: function () {
            this.scrollHandler();
            window.addEventListener(
                'scroll',
                this.launchScroll
            );
        },
        destroyScroll: function () {
            window.removeEventListener(
                'scroll',
                this.launchScroll
            );
        },
        onScrollEnd: function () {
            this.scrollEnd = true;
            this.$store.commit('setScrollEnd', true);
        }
    }
}
