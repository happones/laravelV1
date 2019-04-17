import Vue from 'vue';

const vue = new Vue();
export default {
    open(message, type = 'is-dark', position = null, duration = null) {
        this.toast(message, type, position, duration)
    },
    primary(message, position = null, duration = null) {
        this.toast(message, 'is-primary', position, duration)
    },
    success(message, position = null, duration = null) {
        this.toast(message, 'is-success', position, duration)
    },
    info(message, position = null, duration = null) {
        this.toast(message, 'is-info', position, duration)
    },
    warning(message, position = null, duration = null) {
        this.toast(message, 'is-warning', position, duration)
    },
    danger(message, position = null, duration = null) {
        this.toast(message, 'is-danger', position, duration)
    },
    toast(message, type = null, position = null, duration = null) {
        vue.$toast.open({
            message: message,
            type: type,
            position: position?position: 'is-top',
            duration: duration?duration: 6000
        })
    }
}
