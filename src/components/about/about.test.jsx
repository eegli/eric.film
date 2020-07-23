import { shallow } from '@/src/tests/testUtils';
import About from './about.component';
import Cards from './cards/card.component';
import Resume from './resume/resume.component';

describe('About', () => {
  const wrapper = shallow(<About />);

  it('displays cards component', () => {
    expect(wrapper.find(Cards)).toHaveLength(1);
  });
  it('displays resume component', () => {
    expect(wrapper.find(Resume)).toHaveLength(1);
  });
});
