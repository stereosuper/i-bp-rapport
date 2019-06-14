import {
    requestAnimFrame
} from '~/assets/js/utils';

export default {
    data() {
        return {
            w: null,
            h: null,
            resizeFunctions: [],
            rtime: null,
            timeoutWindow: false,
            delta: 200
        };
    },
    computed: {
        noTransitionElts() {
            return this.$store.state.noTransitionElts;
        }
    },
    methods: {
        resizeend: function () {
            if (new Date() - this.rtime < this.delta) {
                setTimeout(this.resizeend, this.delta);
            } else {
                this.timeoutWindow = false;
                [...this.noTransitionElts].map(el => {
                    el.classList.remove('no-transition');
                    return el;
                })
            }
        },
        noTransition: function () {
            [...this.noTransitionElts].map(el => {
                el.classList.add('no-transition');
                return el;
            })

            this.rtime = new Date();

            if (this.timeoutWindow === false) {
                this.timeoutWindow = true;
                setTimeout(this.resizeend, this.delta);
            }
        },
        resizeHandler: function () {
            this.w = window.innerWidth;
            this.h = window.innerHeight;

            this.$store.commit('setWindow', {
                w: this.w,
                h: this.h
            })
            this.noTransition();
        },
        launchWindow: function () {
            requestAnimFrame(this.resizeHandler);
        },
        initWindow: function () {
            this.resizeHandler();
            window.addEventListener(
                'resize',
                this.launchWindow
            );
        },
        destroyWindow: function () {
            window.removeEventListener(
                'resize',
                this.launchWindow
            );
        },
    }
}
