import { render, screen } from '@/utils/test-utils';
import ScreenOne from './ScreenOne';

describe('ScreenOne', () => {
  test('should render', () => {
    render(<ScreenOne />);
    const screenOne = screen.getByTestId('screen-one');
    expect(screenOne).toBeInTheDocument();
  });
});
