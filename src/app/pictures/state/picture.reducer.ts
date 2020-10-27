import { ApplicationModule } from '@angular/core';
import { createReducer, on } from '@ngrx/store';
import { PicturesPageActions } from './actions';


export interface PictureState {
  pagination: boolean;
  pageSize: number;
  page: number;
  loading: boolean;
}
const initialState: PictureState = {
  pagination: false,
  page: 0,
  pageSize: 60,
  loading: true
};

export const pictureReducer = createReducer(
  initialState,
  on(PicturesPageActions.togglePagination, state => ({ ...state, pagination: !state.pagination })),
  on(PicturesPageActions.finishedLoading, (state) => ({ ...state, loading: false })),
  on(PicturesPageActions.updatePageAndPageSize, (state, action) => {
    return {
      ...state,
      page: action.page,
      pageSize: action.pageSize
    };
  })
);
