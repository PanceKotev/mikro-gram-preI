import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PictureState } from './picture.reducer';

const featureStateSelector = createFeatureSelector<PictureState>('pictures');

export const getPagination = createSelector(featureStateSelector, state => state.pagination);

export const getPage = createSelector(featureStateSelector, state => ({ page: state.page, pageSize: state.pageSize }));

export const getLoading = createSelector(featureStateSelector, state => state.loading);
