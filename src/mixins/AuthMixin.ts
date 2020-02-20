import { Component, Vue } from "vue-property-decorator";
import { Mutation } from "vuex-class";


@Component({})
export default class AuthMixin extends Vue {
    @Mutation('unsetUser', { namespace: 'authModule' }) unsetUser !: any;

    logout() {
        this.unsetUser();
        this.$router.push('/login');
    }
}