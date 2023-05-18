import { ReactComponent as PlusIcon } from '@/assets/plus.svg';
import { ReactComponent as SettingsIcon } from '@/assets/settings.svg';
import { ReactComponent as UploadIcon } from '@/assets/upload.svg';

import objectEntries from '@/utils/objectEntries';
import { useState } from 'react';
import './screen-one-style.scss';
import screenOneData, { ScreenOneData } from './screenOneData';

type SelectedHeaders = Record<keyof ScreenOneData, 0 | 1>;

const uniqueContracts = [...new Set(screenOneData.map((row) => row.contract))];

export default function ScreenOne() {
  const [selectedHeaders, setSelectedHeaders] = useState<SelectedHeaders>({
    id: 1,
    contract: 1,
    offer: 1,
    data: 1,
  });

  const [selectedContract, setSelectedContract] = useState<'all' | string>(
    'all',
  );

  const selectedHeadersArray = objectEntries(selectedHeaders);

  return (
    <div className="screen1">
      <div className="screen1__header">
        <select
          value={selectedContract}
          onChange={(e) => setSelectedContract(e.target.value)}
        >
          <option value="all">Select Contract</option>
          {uniqueContracts.map((contract) => (
            <option key={contract} value={contract}>
              {contract}
            </option>
          ))}
        </select>

        <div>
          <div>
            <UploadIcon />
          </div>
          <label
            htmlFor="settings-wrapper"
            className="screen1__settings-wrapper"
          >
            <SettingsIcon />

            <input
              type="checkbox"
              id="settings-wrapper"
              className="settings-wrapper"
            />

            <div className="screen1__settings-dropdown">
              {selectedHeadersArray.map(([header, status]) => (
                <label key={header} htmlFor={header}>
                  <input
                    type="checkbox"
                    id={header}
                    checked={status === 1}
                    onChange={() =>
                      setSelectedHeaders((prev) => ({
                        ...prev,
                        [header]: prev[header] ? 0 : 1,
                      }))
                    }
                  />
                  {header}
                </label>
              ))}
            </div>
          </label>
          <div>
            <PlusIcon />
          </div>
        </div>
      </div>

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
    </div>
  );
}
