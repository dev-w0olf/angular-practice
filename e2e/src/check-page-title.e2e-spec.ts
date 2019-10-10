import {browser} from 'protractor';

describe('Page Title E2E', () => {
  beforeEach(() => {
    browser.get('http://localhost:4299');
  });

    it('should verify the page title', () => {
      const pageTitle = 'FlightMan';
      expect(browser.getTitle()).toEqual(pageTitle);
    });

  it('should verify the page title manually', (done) => {
    // Asynchronous events are handled manually by providing a callback function to the promise then method
    browser.getTitle()
      .then(function (pageTitle) {
        expect(pageTitle).toEqual('FlightMan');
        done();
      });
  });
});
