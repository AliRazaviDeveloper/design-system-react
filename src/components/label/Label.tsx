import * as React from "react";
import { cn } from "@/libs/utility";
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white"
        )}
        {...props}
      />
    );
  }
);
Label.displayName = "Label";
export default Label;
