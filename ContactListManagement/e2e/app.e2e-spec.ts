import { M7ProjectShoppingSite4Page } from './app.po';

describe('m7-project-shopping-site4 App', () => {
  let page: M7ProjectShoppingSite4Page;

  beforeEach(() => {
    page = new M7ProjectShoppingSite4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
