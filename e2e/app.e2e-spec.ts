import { TenPage } from './app.po';

describe('ten App', () => {
  let page: TenPage;

  beforeEach(() => {
    page = new TenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
