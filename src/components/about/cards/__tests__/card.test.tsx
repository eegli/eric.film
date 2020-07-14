import { shallow } from 'enzyme';
import Card from '../card.component';

describe('<Card />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
});
