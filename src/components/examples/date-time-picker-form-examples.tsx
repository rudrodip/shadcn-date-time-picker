import { DatePickerForm, DatePickerWithRangeForm, DateTimePickerForm, DateTimePicker24hForm } from "@/components/date-n-time/form";
import { ComponentWrapper } from "./wrapper";

export const FormExamples = () => {
  return (
    <div className="w-full space-y-5">
      <p className="text-lg">
        Example with{" "}
        <span className="text-base font-mono border p-px rounded">
          react-hook-form & zod
        </span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-full">
        <ComponentWrapper
          Component={DatePickerForm}
          label="Date Picker Form"
          slug="date-picker-form"
        />
        <ComponentWrapper
          Component={DatePickerWithRangeForm}
          label="Date Picker With Range Form"
          slug="date-picker-range-form"
        />
        <ComponentWrapper
          Component={DateTimePickerForm}
          label="Date Time Picker Form"
          slug="date-time-picker-form"
        />
        <ComponentWrapper
          Component={DateTimePicker24hForm}
          label="Date Time 24h Picker Form"
          slug="date-time-24h-picker-form"
        />
      </div>
    </div>
  );
}
