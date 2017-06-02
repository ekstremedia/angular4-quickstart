import { Angular4QuickstartPage } from './app.po';

describe('angular4-quickstart App', () => {
  let page: Angular4QuickstartPage;

  beforeEach(() => {
    page = new Angular4QuickstartPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
