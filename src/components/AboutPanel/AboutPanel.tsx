import '../../styles/panel.css'
import './AboutPanel.css'

const SKILLS = ['TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'Figma-curious']

export const AboutPanel = () => {
  return (
    <section className="panel">
      <p className="eyebrow">hi, I'm Nora</p>

      <h1 className="heading">
        Software engineer with a soft spot
        <br />
        for tidy code and cozy interfaces.
      </h1>

      <p className="lede">
        I'm a software engineer based in Austin, TX, currently building web products by day and small side-projects
        by night. I like systems that are both fast and kind to the people using them — good error states, gentle
        empty states, a UI that doesn't yell. Outside of work you'll find me collecting houseplants, drinking too
        much oolong tea, and redesigning this website for the fourth time.
      </p>

      <div className="chips">
        {SKILLS.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
