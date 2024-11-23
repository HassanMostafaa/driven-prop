interface PageHeaderProps {
  heading: string
  subheading?: string
  text?: string
}

export function PageHeader({ heading, subheading, text }: PageHeaderProps) {
  return (
    <div className="space-y-4 text-center py-12 md:py-16">
      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
        {heading}
      </h1>
      {subheading && (
        <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl">
          {subheading}
        </h2>
      )}
      {text && (
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          {text}
        </p>
      )}
    </div>
  )
}
