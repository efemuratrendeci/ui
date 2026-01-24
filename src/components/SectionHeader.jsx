export default function SectionHeader({ header }) {
  const detail =
    header?.toLowerCase() === "timeline"
      ? "click icons for more"
      : "hover icons for more";

  return (
    <div className="section_header">
      <h2>{header}</h2>
      <span className="section_header_detail">{detail}</span>
    </div>
  );
}
