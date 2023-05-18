import objectEntries from '@/utils/objectEntries';
import { useMemo, useState } from 'react';
import ScreenOneHeader from './components/ScreenOneHeader';
import ScreenOneTable from './components/ScreenOneTable';
import './screen-one-style.scss';
import { SelectedHeaders } from './screenOneData';

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

  const selectedHeadersArray = useMemo(() => {
    return objectEntries(selectedHeaders);
  }, [selectedHeaders]);

  return (
    <div className="screen1">
      <ScreenOneHeader
        {...{
          selectedContract,
          setSelectedContract,
          selectedHeadersArray,
          setSelectedHeaders,
        }}
      />

      <ScreenOneTable
        {...{
          selectedHeadersArray,
          selectedContract,
        }}
      />
    </div>
  );
}
