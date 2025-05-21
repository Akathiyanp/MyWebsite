import RevealOnScroll from "./RevealOnScroll";


export const Projects = () => {
  return (
    <>
      <section
        id="project"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
                {/* md:grid-cols-2 */}
          <div className="grid grid-cols-1  gap-6  "> 
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1] transition-all  ">
              <h3 className="text-xl font-bold mb-2">TeleMedicine Platform</h3>
              <p className="text-gray-400 mb-3">
                This project is a cutting-edge TeleMedicine Platform built using
                Next.js for seamless server-side rendering and dynamic routing.
                It integrates advanced Large Language Models (LLMs) to provide
                intelligent, real-time assistance to users. Additionally, the
                platform leverages GROQ API for efficient querying and fetching
                of structured data, ensuring a smooth and responsive user
                experience.
              </p>
              <div>
                {["Next.js", "GROQ", "LLMs"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-3">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  <a href="https://github.com/Akathiyanp/chat_hub"> View Project 👉🏽 </a>
                </a>
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
export default Projects;
