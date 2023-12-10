import { cn } from "@/lib/utils";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  text?: string;
}

interface PageSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  text?: string;
  orientation: "left" | "right";
  border?: boolean;
}

export function PageHeader({
  heading,
  text,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <hgroup className={cn("border-b-2 border-muted-foreground/50 pb-8", className)} {...props}>
      <h1 className="text-5xl md:text-7xl lg:text-9xl 2xl:text-[140px] font-semibold 2xl:leading-tight text-foreground">
        {heading}
      </h1>
      {text && <p className="text-3xl text-muted-foreground">{text}</p>}
    </hgroup>
  );
}

export function PageSection({
  heading,
  text,
  className,
  orientation,
  border = true,
  ...props
}: PageSectionProps) {
  return (
    <div className={className}>
      <hgroup className="space-y-4" {...props}>
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground ${orientation === "right" && "text-right"}`}>
          {heading}
        </h1>
        {text && <p className={`text-xl text-muted-foreground ${orientation === "right" && "text-right"}`}>{text}</p>}
      </hgroup>
      {border && <hr className="my-4 border-b border-secondary " />}
    </div>
  );
}