require('jsdom-global/register'); // https://github.com/enzymejs/enzyme/issues/341
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });
