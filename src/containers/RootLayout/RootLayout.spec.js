import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import RootLayout from './RootLayout'

describe('<RootLayout />', function () {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<RootLayout />)
    })

    it('has a single wrapper element', () => {
        expect(wrapper.find('.app'))
            .to.have.length(1);
    });
});
