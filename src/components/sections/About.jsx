import RevealOnScroll from "./RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
    "Bootstrap",
  ];
  const backendSkills = [
    "NodeJS",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Python",
  ];

  return (
    <>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div></div>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innnovations solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend Skills</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend Skills</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Education</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2" >
                                    <li>
                                        <strong>B.S. in Computer Science</strong>  - Bharathi Dhasan University (2022 - 2025)
                                    </li>
                                    <br />
                                    <li>
                                        Relevant Coursework: Computer Networks, Software Engineering, Database Management Systems, Operating Systems...
                                    </li>
                                </ul>
                            </div>
                              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold">Full Stack Software Developer at alphaesAI (May 2025 - Present)</h4>
                                        <br />
                                        <p> Developed and maintained a frontend web application using React, TailwindCSS, shadcn/ui and MongoDB.</p>
                                    </div>
                                    <br />

                                </div>
                                <br />
                                <div className="space-y-4 text-gray-300">
                                    <h4 className="font-semibold">Full Stack Developer Intern at alphaesAI (July 2024 - March 2025)</h4>
                                    <div>
                                        
                                        <p>Developed and maintained a web application using React, Node.js, Express, and MongoDB.</p>
                                    </div>

                                </div>

                            </div>
                    </div>

        </div>
        </RevealOnScroll>
      </section>
    </>
  );
};

export default About;
