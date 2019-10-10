import {browser, by, element, ElementArrayFinder, ElementFinder, protractor} from 'protractor';

describe('Flight Search E2E Test', () => {
  let from: ElementFinder;
  let to: ElementFinder;
  let search: ElementFinder;
  let flights: ElementArrayFinder;
  let firstFlight: ElementFinder;
  let card: ElementFinder;

  beforeEach(() => {
    browser.get('http://localhost:4299');
    // Maximize browser to show sidebar and flight-search item
    browser.manage().window().maximize();

    // Navigate to flight-search component
    const navigate = element(by.css('[href="/flight-search"]'));
    navigate.click();

    from = element(by.css('input[name=from]'));
    from.clear();
    from.sendKeys('Graz');

    to = element(by.css('input[name=to]'));
    to.clear();
    to.sendKeys('Wien');

    search = element(by.cssContainingText('button', 'Search'));
    search.click();

    flights = element.all(by.tagName('app-flight-card'));
    firstFlight = flights.first();
    card = firstFlight.element(by.css('div.card'));
  });

  it('should show one flight cards after search', () => {
    expect(flights.count()).toBe(1);
  });

  it('should verify card background color change: initially/unselected, after mouse click select', () => {
    const selectFlight = firstFlight.element(by.cssContainingText('button', 'Select'));
    const white = 'rgba(255, 255, 255, 1)';
    const selectedColor = 'rgba(176, 196, 222, 1)';

    // Check CSS background-color by name
    let cardBackground = card.getAttribute('style');
    expect(cardBackground).toContain('background-color: white');

    // MouseClick to select flight card
    // Check CSS background-color as RGBA value
    browser.sleep(1000);
    browser.actions().mouseMove(selectFlight).perform();
    browser.actions().click().perform();
    cardBackground = card.getCssValue('background-color');
    expect(cardBackground).toBe(selectedColor);
    browser.sleep(5000);
  });

  it('should disable search button if from is empty', () => {
    // Force interaction with sendKeys to update Angular binding for disabled button state
    from.clear();
    from.sendKeys(' ', protractor.Key.BACK_SPACE);
    expect(search.isEnabled()).toBe(false);
    browser.sleep(1000);
  });

  it('should enable search button if from and to have values', () => {
    from.clear();
    from.sendKeys('Graz');
    to.clear();
    to.sendKeys('Wien');
    expect(search.isEnabled()).toBe(true);
    browser.sleep(5000);
  });
});
