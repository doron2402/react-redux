import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';
import TextInput from '../common/TextInput';
function setup({saving}) {
  const props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe('CourseForm', () => {
  it('Should render form with h1', () => {
    const wrapper = setup({saving: false});
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  describe('Form should have', () => {
    it('3 input text', () => {
      const wrapper = setup({saving: false});
      expect(wrapper.find('input[type="submit"]').length).toBe(1);
    });
  });
});
