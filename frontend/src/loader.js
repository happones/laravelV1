import Vue from 'vue'

const app = new Vue();

export default {
    loader: null,
    show() {
        this.loader = app.$loading.open();
    },
    hide() {
        if (this.loader) {
            this.loader.close();
        }
    }
}
