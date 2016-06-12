jest.unmock('../RootLayout')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import RootLayout from '../RootLayout'

describe('RootLayout', () => {
  it ('has a header element', () => {
    const rootLayout = TestUtils.renderIntoDocument(
      <RootLayout />
    );

    const node = ReactDOM.findDOMNode(rootLayout);
    expect(node.className).toEqual("app");
  })
})
