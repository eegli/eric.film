import { shallow } from 'enzyme';
import Card from '../card.component';

describe('<Card />', () => {
  it('Card components', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
});
