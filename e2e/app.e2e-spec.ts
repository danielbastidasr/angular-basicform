import { BasicFormsExamplePage } from './app.po';

describe('basic-forms-example App', () => {
  let page: BasicFormsExamplePage;

  beforeEach(() => {
    page = new BasicFormsExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
