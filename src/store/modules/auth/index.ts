import { Module } from 'vuex';
import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { AuthState } from './types';
import { RootState } from '@/store/types';

const namespaced: boolean = true;

type AuthModule = Module<AuthState, RootState>;

export const authModule: AuthModule = {
    namespaced,
    state,
    actions,
    mutations,
    getters,
};