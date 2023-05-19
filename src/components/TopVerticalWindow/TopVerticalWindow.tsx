import { useAppDispatch, useAppSelector } from '@/app/hook';
import {
  changeTopVerticalWindowValues,
  selectTopVerticalWindowValues,
} from '@/features/screen/screenSlice';
import ScreenOne from '@/features/ScreenOne';
import ScreenTwo from '@/features/ScreenTwo';
import Split from 'react-split';

export default function TopVerticalWindow() {
  const dispatch = useAppDispatch();
  const topVerticalWindowValues = useAppSelector(selectTopVerticalWindowValues);

  const onDragEnd = (sizes: number[]) => {
    dispatch(changeTopVerticalWindowValues(sizes));
  };
  return (
    <Split
      className="split"
      sizes={topVerticalWindowValues}
      onDragEnd={onDragEnd}
    >
      <ScreenOne />
      <ScreenTwo />
    </Split>
  );
}
