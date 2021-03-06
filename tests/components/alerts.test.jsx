import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../src/components/Alert';

xit('renders new message', () => {
  const wrapper = shallow((
    <Alert message="Error!" />
  ));
  expect(wrapper.find('.Alert').text()).toBe('Error!');
});

xit('renders a success message', () => {
  const wrapper = shallow((
    <Alert message="Success!!!" success />
  ));
  expect(wrapper.find('.Alert.success').text()).toBe('Success!!!');
});
