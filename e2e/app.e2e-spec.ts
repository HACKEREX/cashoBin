import { EzyCashPage } from './app.po';

describe('ezy-cash App', () => {
  let page: EzyCashPage;

  beforeEach(() => {
    page = new EzyCashPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
