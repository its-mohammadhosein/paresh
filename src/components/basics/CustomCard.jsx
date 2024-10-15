import Link from "next/link";
import PropTypes from "prop-types";

const allowedElements = {
  button: "button",
  Link: Link,
};

function CustomCard({
  asChild: Element = "button", // Default to 'button'
  href,
  children,
  Width = "400px", // Default width
  Height = "200px", // Default height
  Radius = "20px", // Default border-radius
  color = "#ccc", // Background color for the card
  childColor = "#999", // Background color for the child element
  borderColor = "#000", // Border color for the child element
  borderWidth = "1px", // Border width for the child element
}) {
  const Tag = allowedElements[Element] || "button"; // Fallback to 'button' if an invalid tag is provided

  return (
    <div
      className={`hover:[&_${Tag}]:m-0`}
      style={{
        width: Width,
        height: Height,
        borderRadius: Radius,
        backgroundColor: color,
      }}
    >
      <Tag
        href={Element === "Link" ? href : undefined}
        className="duration-200 transition-all -mt-1"
        style={{
          width: Width,
          height: Height,
          borderRadius: Radius,
          backgroundColor: childColor,
          borderColor: borderColor,
          borderWidth: borderWidth,
          borderStyle: "solid", // Ensuring the border is visible
        }}
      >
        {children}
      </Tag>
    </div>
  );
}

CustomCard.propTypes = {
  asChild: PropTypes.oneOf(Object.keys(allowedElements)), // Restrict to allowed elements
  href: PropTypes.string, // href should be provided if the element is 'Link'
  Width: PropTypes.string, // Custom width for the card
  Height: PropTypes.string, // Custom height for the card
  Radius: PropTypes.string, // Border-radius for the card and child
  color: PropTypes.string, // Background color for the card
  childColor: PropTypes.string, // Background color for the child element (button or link)
  borderColor: PropTypes.string, // Border color for the child element
  borderWidth: PropTypes.string, // Border width for the child element
  children: PropTypes.node.isRequired, // Content inside the tag
};

export default CustomCard;
