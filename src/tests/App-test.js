let React = require('react');
let TestUtils = require('react-dom/lib/ReactTestUtils');
let expect = require('expect');
let App = require('../js/App');

describe('App', function () {
    it('renders without problems', function () {
        let app = TestUtils.renderIntoDocument(<App/>);
        expect(app).toExist();
    });
});