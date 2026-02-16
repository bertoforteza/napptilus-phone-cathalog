import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';
import { render, screen, waitFor } from '../../test/test-utils';

describe('Given a useDebounce custom hook', () => {
  describe("When it's called with a text value and a delay", () => {
    test('Then it should return the received value after the specified delay', async () => {
      const TestComponent = () => {
        const [value, setValue] = useState<string>('initial');
        const debouncedValue = useDebounce(value, 500);

        useEffect(() => {
          const timer = setTimeout(() => setValue('updated'), 0);
          return () => clearTimeout(timer);
        }, []);

        return <div>{debouncedValue}</div>;
      };

      render(<TestComponent />);

      expect(screen.getByText('initial')).toBeInTheDocument();

      await waitFor(() => expect(screen.getByText('updated')).toBeInTheDocument(), {
        timeout: 600,
      });
    });
  });
});
