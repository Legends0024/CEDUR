import clsx from "clsx";
import PropTypes from "prop-types";

const TestimonialItem = ({ item, containerClassName }) => {
  if (!item) return null;

  return (
    <div
      className={clsx(
        "relative px-14 pb-14 pt-11 max-md:px-0 max-md:pt-11", // Removed after pseudo-element for line
        containerClassName
      )}
    >
      <blockquote className="h6 mb-8 text-black">{item.comment}</blockquote>

      <div className="flex items-center max-xl:-mr-8">
        <div className="mr-4 size-20 shrink-0 rounded-half border-2 border-s2 p-1.5">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover"
          />
        </div>
        <div>
          <h4 className="body-2 mb-0.5 text-black">{item.name}</h4>
          <p className="small-compact uppercase text-black">{item.role}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialItem.propTypes = {
  item: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }),
  containerClassName: PropTypes.string,
};

export default TestimonialItem;
