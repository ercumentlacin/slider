import { render, screen } from '@/utils/test-utils';
import screenOneData, { uniqueContracts } from '../screenOneData';
import ScreenOneTable, { ScreenOneTableProps } from './ScreenOneTable';

const props: ScreenOneTableProps = {
  selectedContract: 'all',
  selectedHeadersArray: [
    ['id', 1],
    ['contract', 1],
    ['offer', 1],
    ['data', 1],
  ],
};

describe('ScreenOneTable', () => {
  test('should render', () => {
    render(<ScreenOneTable {...props} />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  test('should render all rows', () => {
    render(<ScreenOneTable {...props} />);
    const table = screen.getByRole('table');
    const rows = table.querySelectorAll('tbody > tr');
    expect(rows.length).toBe(
      screenOneData.filter((row) => {
        if (props.selectedContract === 'all') return true;

        return row.contract === +props.selectedContract;
      }).length,
    );
  });

  test('should render all columns', () => {
    render(<ScreenOneTable {...props} />);
    const table = screen.getByRole('table');
    const rows = table.querySelectorAll('tbody > tr');
    const columns = rows[0].querySelectorAll('td');
    expect(columns.length).toBe(4);
  });

  test('should render only selected columns', () => {
    render(<ScreenOneTable {...props} />);
    const table = screen.getByRole('table');
    const rows = table.querySelectorAll('tbody > tr');
    const columns = rows[0].querySelectorAll('td');
    expect(columns.length).toBe(4);
  });

  test('should render only selected rows', () => {
    render(<ScreenOneTable {...props} />);
    const table = screen.getByRole('table');
    const rows = table.querySelectorAll('tbody > tr');
    expect(rows.length).toBe(
      screenOneData.filter((row) => {
        if (props.selectedContract === 'all') return true;

        return row.contract === +props.selectedContract;
      }).length,
    );
  });

  test('should render only selected rows and columns', () => {
    render(<ScreenOneTable {...props} />);
    const table = screen.getByRole('table');
    const rows = table.querySelectorAll('tbody > tr');
    const columns = rows[0].querySelectorAll('td');
    expect(columns.length).toBe(4);
  });

  test('should render only selected rows and columns', () => {
    render(
      <ScreenOneTable
        {...{
          ...props,
          selectedContract: uniqueContracts.at(-1)?.toString() ?? 'all',
        }}
      />,
    );
    const table = screen.getByRole('table');
    const rows = table.querySelectorAll('tbody > tr');
    expect(rows.length).toBe(
      screenOneData.filter((row) => {
        if (props.selectedContract === 'all') return true;

        return row.contract === +props.selectedContract;
      }).length,
    );
  });
});
