import React from 'react';
import { shallow } from 'enzyme';
import Propertycard from '../../src/components/propertycard';

it('renders title', () => {
  const wrapper = shallow((
    <Propertycard title="Flat" />
  ));
  expect(wrapper.find('.title').text()).toContain('Flat');
});

it('renders type', () => {
  const wrapper = shallow((
    <Propertycard type="1 Bed Flat" />
  ));
  expect(wrapper.find('.type').text()).toContain('1 Bed Flat');
});

it('renders bedrooms', () => {
  const wrapper = shallow((
    <Propertycard bedrooms="1" />
  ));
  expect(wrapper.find('.bedrooms').text()).toContain('1');
});

it('renders bathrooms', () => {
  const wrapper = shallow((
    <Propertycard bathrooms="1" />
  ));
  expect(wrapper.find('.bathrooms').text()).toContain('1');
});

it('renders price', () => {
  const wrapper = shallow((
    <Propertycard price="1" />
  ));
  expect(wrapper.find('.price').text()).toContain('1');
});

it('renders city', () => {
  const wrapper = shallow((
    <Propertycard city="Manchester" />
  ));
  expect(wrapper.find('.city').text()).toContain('Manchester');
});

it('renders email', () => {
  const wrapper = shallow((
    <Propertycard email="email" />
  ));
  expect(wrapper.find('.email').text()).toContain('Email');
});
