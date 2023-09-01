
import {
    DatePicker,
    DatePickerProvider,
    useDatePickGetter,
    useDatePickReset,
  } from '@bcad1591/react-date-picker';
const Icon = (props) => {
    const { pickedDates } = useDatePickGetter();
    const resetFunc = useDatePickReset();
  
    return (
        <div>
          <DatePicker disablePreviousDays />
          <hr />
          <div>{pickedDates.firstPickedDate?.toString()}</div>
          <div>{pickedDates.secondPickedDate?.toString()}</div>
          <button type="button" onClick={resetFunc}>
            Reset
          </button>
        </div>
      );
};

export default Icon;