import { Jobboard.NewPage } from './app.po';

describe('jobboard.new App', function() {
  let page: Jobboard.NewPage;

  beforeEach(() => {
    page = new Jobboard.NewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
