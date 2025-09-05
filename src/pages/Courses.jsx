export default function Courses() {
  const courses = [
    {
      id: 'modern-js',
      title: 'Modern JavaScript (ES6+)',
      provider: 'freeCodeCamp',
      level: 'Beginner → Intermediate',
      duration: '8–10 hrs',
      description:
        'Master fundamentals of JavaScript including ES6 syntax, async/await, modules, and modern tooling.',
      tags: ['JavaScript', 'ES6', 'Async', 'Tooling'],
      link: 'https://www.freecodecamp.org/learn',
    },
    {
      id: 'react-fundamentals',
      title: 'React Fundamentals',
      provider: 'react.dev',
      level: 'Beginner',
      duration: '6–8 hrs',
      description:
        'Learn components, props, state, effects, and how to build interactive UIs with the modern React API.',
      tags: ['React', 'Hooks', 'Components'],
      link: 'https://react.dev/learn',
    },
    {
      id: 'advanced-react',
      title: 'Advanced React Patterns',
      provider: 'Frontend Masters',
      level: 'Intermediate',
      duration: '6 hrs',
      description:
        'Dive into advanced patterns like context composition, render optimization, and performance best practices.',
      tags: ['React', 'Patterns', 'Performance'],
      link: 'https://frontendmasters.com/',
    },
    {
      id: 'typescript',
      title: 'TypeScript for JavaScript Developers',
      provider: 'TypeScript Handbook',
      level: 'Beginner → Intermediate',
      duration: '5–7 hrs',
      description:
        'Add strong typing to your JavaScript with interfaces, generics, unions, and modern tooling integration.',
      tags: ['TypeScript', 'Types', 'Tooling'],
      link: 'https://www.typescriptlang.org/docs/handbook/intro.html',
    },
    {
      id: 'node-express',
      title: 'Node.js & Express Basics',
      provider: 'nodejs.dev',
      level: 'Beginner',
      duration: '6 hrs',
      description:
        'Build REST APIs with Node.js and Express. Learn routing, middlewares, and environment configuration.',
      tags: ['Node.js', 'Express', 'REST'],
      link: 'https://nodejs.dev/en/learn/',
    },
    {
      id: 'ds-algo',
      title: 'Data Structures & Algorithms',
      provider: 'Educative',
      level: 'Intermediate',
      duration: '15–20 hrs',
      description:
        'Practice problem‑solving with arrays, trees, graphs, and common algorithmic techniques.',
      tags: ['DSA', 'Algorithms', 'Problem Solving'],
      link: 'https://www.educative.io/',
    },
    {
      id: 'system-design',
      title: 'System Design Basics',
      provider: 'ByteByteGo',
      level: 'Intermediate',
      duration: '8–12 hrs',
      description:
        'Learn to design scalable systems: caching, load balancing, databases, and trade‑offs.',
      tags: ['System Design', 'Scalability', 'Architecture'],
      link: 'https://bytebytego.com/',
    },
    {
      id: 'sql-db',
      title: 'SQL & Relational Databases',
      provider: 'Khan Academy',
      level: 'Beginner',
      duration: '5–7 hrs',
      description:
        'Understand SQL queries, joins, indexes, and best practices for relational data modeling.',
      tags: ['SQL', 'Databases', 'Modeling'],
      link: 'https://www.khanacademy.org/computing/computer-programming/sql',
    },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Learning Hub</h1>
      <div className="page-content">
        <p style={{ marginBottom: '1.5rem', color: '#6b7280' }}>
          Curated, static learning resources to accelerate your career growth.
        </p>
        <div className="courses-grid">
          {courses.map((course) => (
            <article key={course.id} className="course-card">
              <div className="course-header">
                <h3 className="course-title">{course.title}</h3>
                <span className="course-provider">{course.provider}</span>
              </div>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <span className="badge">{course.level}</span>
                <span className="dot" aria-hidden>•</span>
                <span className="badge muted">{course.duration}</span>
              </div>
              <div className="course-tags">
                {course.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <a
                className="course-cta"
                href={course.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                View Course
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
