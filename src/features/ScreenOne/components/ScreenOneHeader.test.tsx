import { fireEvent, render, screen } from '@/utils/test-utils';
import userEvent from '@testing-library/user-event';
import { uniqueContracts } from '../screenOneData';
import ScreenOneHeader, { ScreenOneHeaderProps } from './ScreenOneHeader';

const setSelectedHeaders = vi.fn();

const props: ScreenOneHeaderProps = {
  selectedContract: 'all',
  setSelectedContract: vi.fn(),
  selectedHeadersArray: [
    ['id', 1],
    ['contract', 1],
    ['offer', 1],
    ['data', 1],
  ],
  setSelectedHeaders,
};

describe('ScreenOneHeader', () => {
  test('should render', () => {
    render(<ScreenOneHeader {...props} />);
    const selectBox = screen.getByRole('combobox') as HTMLSelectElement;
    expect(selectBox).toBeInTheDocument();
  });

  test('should render all options', () => {
    render(<ScreenOneHeader {...props} />);
    const selectBox = screen.getByRole('combobox') as HTMLSelectElement;

    expect(selectBox.children.length).toBe(uniqueContracts.length + 1);
  });

  test('should call setSelectedContract on change', () => {
    const { setSelectedContract } = props;
    render(<ScreenOneHeader {...props} />);
    const selectBox = screen.getByRole('combobox') as HTMLSelectElement;

    fireEvent.change(selectBox, {
      target: { value: uniqueContracts.at(-1)?.toString() ?? '' },
    });

    expect(setSelectedContract).toHaveBeenCalledTimes(1);
    expect(setSelectedContract).toHaveBeenCalledWith(
      uniqueContracts.at(-1)?.toString(),
    );
  });

  test('should render settings dropdown', async () => {
    render(<ScreenOneHeader {...props} />);
    const settingsDropdown = screen.getByLabelText('settings');
    expect(settingsDropdown).toBeInTheDocument();

    await userEvent.click(settingsDropdown);

    const inputNamedId = screen.getByRole<HTMLInputElement>('checkbox', {
      name: 'id',
    });

    expect(inputNamedId).toBeInTheDocument();

    await userEvent.click(inputNamedId);

    expect(setSelectedHeaders).toHaveBeenCalledTimes(1);

    const existing = {
      id: 1,
      contract: 1,
      offer: 1,
      data: 1,
    };

    expect(setSelectedHeaders).toHaveBeenCalledWith(expect.any(Function));

    const [updater] = setSelectedHeaders.mock.lastCall;
    const updated = updater(existing);

    expect(updated).toEqual({
      ...existing,
      id: existing.id ? 0 : 1,
    });
  });
});
