import { cn } from "@/lib/utils";

const baseInputStyles =
  "rounded-lg border border-apical-border bg-void px-5 py-3.5 font-body text-[14px] text-primary-text placeholder:text-muted outline-none transition-all focus:border-cyan focus:shadow-[0_0_0_2px_rgba(59,130,246,0.1)]";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function FormInput({ className, ...props }: FormInputProps) {
  return <input className={cn(baseInputStyles, className)} {...props} />;
}

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function FormTextarea({ className, ...props }: FormTextareaProps) {
  return (
    <textarea
      className={cn(baseInputStyles, "resize-none", className)}
      {...props}
    />
  );
}
