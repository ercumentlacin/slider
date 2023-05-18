import screenOneData from '../screenOneData';

interface ScreenOneTableProps {
  selectedHeadersArray: ['data' | 'id' | 'contract' | 'offer', 0 | 1][];
  selectedContract: string;
}

export default function ScreenOneTable({
  selectedHeadersArray,
  selectedContract,
}: ScreenOneTableProps) {
  return (
    <table className="screen1__table">
      <thead>
        <tr>
          {selectedHeadersArray.map(([header, status]) => {
            if (!status) return null;

            return <th key={header}>{header}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {screenOneData
          .filter((row) => {
            if (selectedContract === 'all') return true;

            return row.contract === +selectedContract;
          })
          .map((row, rowIndex) => (
            <tr key={row.id}>
              {selectedHeadersArray.map(([header, status]) => {
                if (!status) return null;

                return (
                  <td key={header}>
                    {header === 'id' ? rowIndex + 1 : row[header]}
                  </td>
                );
              })}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
