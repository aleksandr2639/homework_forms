import Button from '../button';

const btn = new Button();

test('Cheking unsuccessful biulding HTMLElement', () => {
  expect(() => btn.bindToDOM(null)).toThrow(new Error('HTMLElement is not defined'));
});

test('Cheking unsuccessful biulding DOM', () => {
  expect(() => btn.checkBinding(null)).toThrow(new Error('Button not bind to DOM'));
});
