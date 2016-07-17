import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
  let props = {
    course: {},
    saving: saving || false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}
describe('CourseForm via react Test Utils', () => {

  it('Should renders form and h1', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
    let [ h1 ] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('Should save btn is labeled "Save" when no "Saving"', () => {
    const { output } = setup(false);
    const submitBtn = output.props.children[5];
    expect(submitBtn.props.value).toBe('Save');
  });

  it('Should save btn is labeled "Saving..." when saving', () => {
    const { output } = setup(true);
    const submitBtn = output.props.children[5];
    expect(submitBtn.props.value).toBe('Saving...');
  });
});
