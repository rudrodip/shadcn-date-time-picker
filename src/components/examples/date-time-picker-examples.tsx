import { DatePickerDemo, DatePickerWithRange, DateTimePicker, DateTimePicker24h } from "@/components/date-n-time";
import { ComponentWrapper } from "./wrapper";

export const Examples = () => {
  return (
    <div className="w-full space-y-5">
      <p className="text-lg">
        Date & Time picker components built with React &{" "}
        <a
          href="https://ui.shadcn.com/docs/components/date-picker"
          target="_blank"
          className="font-semibold underline"
        >
          ShadCN UI
        </a>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-full">
        <ComponentWrapper
          Component={DatePickerDemo}
          label="Date picker"
          slug="date-picker"
          Footer={() => (
            <span className="text-xs text-muted-foreground">
              provided by{" "}
              <a
                href="https://ui.shadcn.com/docs/components/date-picker"
                target="_blank"
                className="font-semibold underline"
              >
                shadcn
              </a>
            </span>
          )}
        />
        <ComponentWrapper
          Component={DatePickerWithRange}
          label="Date picker with range"
          slug="date-picker-range"
          Footer={() => (
            <span className="text-xs text-muted-foreground">
              provided by{" "}
              <a
                href="https://ui.shadcn.com/docs/components/date-picker-range"
                target="_blank"
                className="font-semibold underline"
              >
                shadcn
              </a>
            </span>
          )}
        />
        <ComponentWrapper
          Component={DateTimePicker}
          label="Date & Time picker"
          slug="date-time-picker"
        />
        <ComponentWrapper
          Component={DateTimePicker24h}
          label="24h Date & Time picker"
          slug="date-time-24h-picker"
        />
      </div>
    </div>
  );
};
