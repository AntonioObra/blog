interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  text?: string;
}

export function DocsPageHeader({
  heading,
  text,
  className,
  ...props
}: DocsPageHeaderProps) {
  return (
    <div className={className}>
      <div className="space-y-4" {...props}>
        <h1 className="inline-block font-heading text-4xl lg:text-5xl">
          {heading}
        </h1>
        {text && <p className="text-xl text-muted-foreground">{text}</p>}
      </div>
      <hr className="my-4 border-b border-secondary " />
    </div>
  );
}
