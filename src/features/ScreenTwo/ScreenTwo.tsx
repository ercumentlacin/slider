/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-array-index-key */
import { useAppSelector } from '@/app/hook';
import {
  selectBottomVerticalWindowValues,
  selectHorizontalWindowValues,
  selectTopVerticalWindowValues,
} from '@/features/screen/screenSlice';
import { useMemo } from 'react';
import './screen-two-style.scss';

export default function ScreenTwo() {
  const horizontalWindowValues = useAppSelector(selectHorizontalWindowValues);
  const topVerticalWindowValues = useAppSelector(selectTopVerticalWindowValues);

  const bottomVerticalWindowValues = useAppSelector(
    selectBottomVerticalWindowValues,
  );
  const settingsFields = [
    {
      name: horizontalWindowValues,
      label: 'Horizontal Window Values',
    },
    {
      name: topVerticalWindowValues,
      label: 'Top Vertical Window Values',
    },
    {
      name: bottomVerticalWindowValues,
      label: 'Bottom Vertical Window Values',
    },
  ];

  const flexDirection = useMemo(() => {
    if (window.screen.width * (topVerticalWindowValues[1] / 100) > 768) {
      return 'row';
    }
    return 'column';
  }, [topVerticalWindowValues]);

  return (
    <section className="flex flex-col gap-4 screen2">
      <div className="flex flex-col gap-2">
        <h2>Settings</h2>
        {settingsFields.map((field, index) => (
          <div key={index} className="flex flex-col gap-1">
            <h6>{field.label}</h6>
            <div
              className="window-values"
              style={{
                flexDirection,
              }}
            >
              {field.name.map((value, index) => (
                <div key={index}>%{value}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
