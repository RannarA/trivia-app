import { TriviaAppPage } from './app.po';

describe('trivia-app App', () => {
  let page: TriviaAppPage;

  beforeEach(() => {
    page = new TriviaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
