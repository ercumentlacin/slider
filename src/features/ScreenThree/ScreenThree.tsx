/* eslint-disable @typescript-eslint/no-non-null-assertion */
import objectEntries from '@/utils/objectEntries';
import { faker } from '@faker-js/faker';
import { useMemo, useState } from 'react';
import './screen-three-style.scss';
import screenThreeData, { ScreenThreeData } from './screenThreeData';

const selectedHeaders = {
  contract: 1,
  offer: 1,
  data: 1,
};

export default function ScreenThree() {
  const [data, setData] = useState<ScreenThreeData[]>(screenThreeData);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const selectedHeadersArray = useMemo(() => {
    return objectEntries(selectedHeaders);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newContract: ScreenThreeData = {
      id: faker.string.uuid(),
      contract: String(formData.get('contract')!),
      offer: String(formData.get('offer')!),
      data: String(formData.get('data')!),
    };

    setData((prevData): ScreenThreeData[] => [...prevData, newContract]);
  };

  return (
    <section className="screen3">
      <table>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {selectedHeadersArray.map(([header]) => (
                <td key={header}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {isFormVisible && (
          <form onSubmit={handleSubmit}>
            <input name="contract" placeholder="contract" />
            <input name="offer" placeholder="offer" />
            <input name="data" placeholder="data" />
            <button type="submit">Add</button>
          </form>
        )}

        <button onClick={() => setIsFormVisible(true)} type="button">
          Add Contract
        </button>
      </div>
    </section>
  );
}
