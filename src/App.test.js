import react from 'react';
import { shallow } from 'enzyme';
import App from './component/App';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({ adapter: new Adapter() });


describe('App', () => {
    const app = shallow(<App />);

    it('renders properly', () => {
        expect(app).toMatchSnapshot();
    });
    it('contains a connected wallet component', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    })

    it('contained a Loot component', () => {
        expect(app.find('Connect(Loot)').exists()).toBe(true);
    })
})