interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, center = true, light = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className={`font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 ${light ? "text-section-dark-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-3xl ${center ? "mx-auto" : ""} ${light ? "opacity-70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-1 w-20 bg-primary rounded-full mx-auto" />
    </div>
  );
}
