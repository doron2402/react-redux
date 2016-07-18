import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import TextInput from './TextInput';

function setup({label}) {
  const props = {
    name: '',
    label: label || '',
    onChange: () => {},
    placeholder: '',
    value: '',
    error: ''
  };

  return shallow(<TextInput {...props} />);
}

describe('TextInput', () => {
  const label = 'Test1';
  const wrapper = setup({label});
  it('Should have one input', () => {
    expect(wrapper.find('input').length).toBe(1);
  });
  it(`Should have label equal to: ${label}`, () => {
    expect(wrapper.find('label').text()).toBe(label);
  });
});
