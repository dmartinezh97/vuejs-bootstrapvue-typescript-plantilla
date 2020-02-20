import Vue from 'vue'
import VeeValidate from "vee-validate";
Vue.use(VeeValidate, {
    inject: true,
    fieldsBagName: 'veeFields',
    classes: true,
    classNames: {
        valid: 'is-valid',
        invalid: 'is-invalid'
    }
});