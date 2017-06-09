import { NgfbauthPage } from './app.po';

describe('ngfbauth App', () => {
  let page: NgfbauthPage;

  beforeEach(() => {
    page = new NgfbauthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
