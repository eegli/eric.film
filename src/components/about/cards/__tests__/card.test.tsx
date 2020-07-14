import { shallow } from 'enzyme';
import Card from '../card.component';

describe('About - card', () => {
  it('renders component', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
    // console.log(wrapper.debug());
  });
});
