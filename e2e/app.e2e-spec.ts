import { AngularCliLazyPage } from './app.po';

describe('angular-cli-lazy App', () => {
  let page: AngularCliLazyPage;

  beforeEach(() => {
    page = new AngularCliLazyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
