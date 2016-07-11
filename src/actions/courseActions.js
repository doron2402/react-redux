import * as types from './actionTypes';

export function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course
  };
}

export function editCourse(course) {
  return {
    type: types.EDIT_COURSE,
    course
  };
}
