import { render, screen } from '../../test/test-utils';
import Button from './Button';

describe('Given a Button component', () => {
  describe('When it receives a text value', () => {
    test('Then it should display a button with the received text', () => {
      const text = 'Click me';
      const onClick = vi.fn();

      render(<Button text={text} onClick={onClick} />);

      const button = screen.getByRole('button', { name: text });

      expect(button).toBeVisible();
      expect(button).toHaveTextContent(text);
    });
  });

  describe('When it receives a disabled prop with value true and the user tries to click it', () => {
    test('Then it should display a disabled button and not call the onClick function', () => {
      const text = 'Click me';
      const onClickFunction = vi.fn();

      render(<Button text={text} onClick={onClickFunction} disabled />);

      const button = screen.getByRole('button', { name: text });

      expect(button).toBeDisabled();
      expect(onClickFunction).not.toHaveBeenCalled();
    });
  });

  describe('When it receives an on click function and the user clicks it', () => {
    test('Then it should call the onClick function', () => {
      const text = 'Click me';
      const onClickFunction = vi.fn();

      render(<Button text={text} onClick={onClickFunction} />);

      const button = screen.getByRole('button', { name: text });

      button.click();

      expect(onClickFunction).toHaveBeenCalledTimes(1);
    });
  });
});
