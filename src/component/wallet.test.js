import React from 'react';
import { shallow } from 'enzyme';
import  { Wallet } from './Wallet'; 
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });


describe('Wallet', () => {
    const mockDeposit = jest.fn();
    const props = { balance: 20, deposit: mockDeposit };
    const wallet = shallow(<Wallet {...props} />);

    it('renders properly', () =>{
        expect(wallet).toMatchSnapshot();
    });

    it('display the balnace from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20 ');
    });

    it('creates an input to deposit or withdraw from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toEqual(true);
    });

    describe('when the user types into the wallet input', () => {
        const userBalance = '25';
        beforeEach(()=>{
            wallet.find('.input-wallet').simulate('change', { target: { value: userBalance}});
        });

        it('updates the local balance in the state and convert it into a number', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        });

        describe('user want to make a deposit', () => {
            beforeEach(() => {
                wallet.find('.btn-deposit').simulate('click');

                });
                
                it('dispatch the `deposit()` it receives from props with the local balance', () => {
                    expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
            })
        })


    })
})