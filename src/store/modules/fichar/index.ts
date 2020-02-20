import { Module } from 'vuex';
import { state } from './state';
import { actions } from './actions';
import { mutations } from "./mutations";
import { Fichar } from './types';
import { RootState } from '@/store/types';

const namespaced: boolean = true;

type FicharModule = Module<Fichar, RootState>;

export const ficharModule: FicharModule = {
    namespaced,
    state,
    actions,
    mutations,
};