import "./SectionHeading.css";

interface SectionHeadingProps {
    title: string;
    tagline?: string;
}

const SectionHeading = ({ title, tagline }: SectionHeadingProps) => (
    <div className="section-heading">
        <h2 className="sh-title">{title}</h2>
        {tagline && <p className="sh-tagline">{tagline}</p>}
    </div>
);

export default SectionHeading;
