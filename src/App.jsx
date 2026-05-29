import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";



const projects = [
  {
    title: "Bank Application Analysis",
    desc: "Data analysis project focused on banking operations and customer analytics.",
  },
  {
    title: "Marketing Analysis",
    desc: "Marketing insights dashboard and campaign performance analysis.",
  },
  {
    title: "Supply Chain Management",
    desc: "Supply chain optimization and logistics analytics project.",
  },
];

export default function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">

      {/* LEFT SIDEBAR */}
      <aside className="w-full md:w-[30%] md:h-screen md:sticky top-0 bg-white border-r border-gray-200 p-6 md:p-8">

        <img
          src="/picturepro.jpeg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-emerald-500"
        />

        <h1 className="text-4xl font-bold mt-6 text-center">
          Désirée ESSIS
        </h1>

        <p className="text-emerald-600 text-center mt-2">
          MBA • Data Science & AI
        </p>

        <p className="text-gray-600 mt-6 text-center leading-7">
          MBA candidate in Data Science & AI with experience in Product Ownership and PMO within insurance and banking environments. Passionate about data analytics, digital transformation, and using technology to drive business solutions.

        </p>

        {/* SOCIALS */}
        <div className="flex justify-center gap-5 mt-8 text-2xl">

          <a
            href="https://github.com/EssisDez"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/d%C3%A9sir%C3%A9e-essis-663088178/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:desireeessis@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        

      </aside>

      {/* RIGHT CONTENT */}
      <main className="w-full md:w-[70%] p-6 md:p-12">

        <section>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Building intelligent solutions with data.
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Portfolio focused on AI, analytics, finance,
            machine learning, and business intelligence.
          </p>

        </section>

        {/* PROJECTS */}
        <section className="mt-16">

          <h2 className="text-3xl font-bold mb-10">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {projects.map((project, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm p-6"
              >

                <div className="h-48 bg-gray-200 rounded-2xl"></div>

                <h3 className="text-2xl font-bold mt-6">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {project.desc}
                </p>

                <a
                  href="#"
                  className="inline-block mt-6 text-emerald-600 font-semibold"
                >
                  View Project →
                </a>

              </div>

            ))}

          </div>

        </section>

      

      </main>

    </div>
  );
}