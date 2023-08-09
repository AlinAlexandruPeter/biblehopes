import categories from "../utils/verses";

import "../styles/verses.scss";

const Verses = () => {
  return (
    <div className="subjects-container">
      {categories.map((category, i) => (
        <div
          className="subject"
          key={i}
          style={{ background: category.backgroundGradient }}
          onClick={() => (window.location += `/${category.textForRelocation}`)}
        >
          {category.subject}
        </div>
      ))}
    </div>
  );
};

export default Verses;
