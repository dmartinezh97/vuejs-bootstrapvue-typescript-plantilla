import { User, AuthState } from '@/store/modules/auth/types';

export const state: AuthState = {
    user: null,
    isLogged: false,
    error: false,
    errorMessage: ''
}