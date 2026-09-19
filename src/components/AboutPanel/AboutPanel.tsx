import "../../styles/panel.css";
import "./AboutPanel.css";

const SKILLS = [
  "TypeScript",
  "React",
  "Node.js",
  "Kotlin",
  "Ruby",
  "Python",
  "Java",
  "HTML",
  "PostgreSQL",
  "GraphQL",
  "REST APIs",
  "CSS perfectionist",
];

export const AboutPanel = () => {
  return (
    <section className="panel">
      <p className="eyebrow">Hi, I'm Katelyn</p>

      <h1 className="heading">
        Software engineer with full-stack expertise and a deep appreciation for
        thoughtful design.
      </h1>

      <p className="lede">
        Based in New York City, most of my work lives at the intersection of
        full-stack development and UX design. I've always been drawn to the
        space where design and technology meet - building things that don't just
        function but feel considered. Outside of work, you'll find me with a
        film camera in my hand, at a concert, or finally baking something from
        my saved recipes.
      </p>

      <div className="chips">
        {SKILLS.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
