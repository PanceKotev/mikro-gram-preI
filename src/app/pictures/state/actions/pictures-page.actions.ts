import { createAction, props } from '@ngrx/store';

export const togglePagination = createAction('[Pictures] Toggle pagination');

export const updatePageAndPageSize = createAction('[Pictures] Change Page and Page Size ',
  props<{page: number, pageSize: number}>()
);

export const finishedLoading = createAction('[Pictures] Finished loading');
