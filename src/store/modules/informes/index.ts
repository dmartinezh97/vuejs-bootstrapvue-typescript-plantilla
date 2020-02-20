import { Module } from 'vuex';
import { state } from './state';
import { actions } from './actions';
import { mutations } from "./mutations";
import { Informes } from './types';
import { RootState } from '@/store/types';

const namespaced: boolean = true;

type InformesModule = Module<Informes, RootState>;

export const informesModule: InformesModule = {
    namespaced,
    state,
    actions,
    mutations,
};