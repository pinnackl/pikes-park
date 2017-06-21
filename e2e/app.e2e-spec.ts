import { PikesParkPage } from './app.po';

describe('pikes-park App', () => {
  let page: PikesParkPage;

  beforeEach(() => {
    page = new PikesParkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
