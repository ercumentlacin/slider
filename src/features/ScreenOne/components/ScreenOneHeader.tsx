import { ReactComponent as PlusIcon } from '@/assets/plus.svg';
import { ReactComponent as SettingsIcon } from '@/assets/settings.svg';
import { ReactComponent as UploadIcon } from '@/assets/upload.svg';
import { SelectedHeaders, uniqueContracts } from '../screenOneData';

interface ScreenOneHeaderProps {
  selectedContract: string;
  setSelectedContract: (value: React.SetStateAction<string>) => void;
  selectedHeadersArray: ['id' | 'contract' | 'offer' | 'data', 0 | 1][];
  setSelectedHeaders: (value: React.SetStateAction<SelectedHeaders>) => void;
}

export default function ScreenOneHeader({
  selectedContract,
  setSelectedContract,
  selectedHeadersArray,
  setSelectedHeaders,
}: ScreenOneHeaderProps) {
  const onCheckboxChange =
    (header: 'id' | 'contract' | 'offer' | 'data') => () => {
      setSelectedHeaders((prev) => ({
        ...prev,
        [header]: prev[header] ? 0 : 1,
      }));
    };

  return (
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

        <label htmlFor="settings-wrapper" className="screen1__settings-wrapper">
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
                  onChange={onCheckboxChange(header)}
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
  );
}
