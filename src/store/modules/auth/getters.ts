import { GetterTree } from 'vuex';
import { User, AuthState } from '@/store/modules/auth/types';
import { RootState } from '@/store/types';

type AuthGetter = GetterTree<AuthState, RootState>;

export const getters: AuthGetter = {
    getToken(state: AuthState): string{
        if (state.user) return state.user.token;
        else throw ("No hay token");
    }
}