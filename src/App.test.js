import Enzyme, { shallow } from 'enzyme'
import  EnzymeAdapter from '@cfaester/enzyme-adapter-react-18';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()})

test('Renders No-Empty Component Without Crashing', () => {
  const wrapper = shallow(<App />)
  // Debugging
  // console.log(wrapper.debug())

  // Assertions
  expect(wrapper.exists()).toBe(true)
});
