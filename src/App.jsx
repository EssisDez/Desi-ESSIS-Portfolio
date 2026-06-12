import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes } from "react-icons/fa";



const projects = [
  {
    title: "Customer Churn Prediction (Power BI + ML)",
    tools: ["Python", "Machine Learning", "Power BI", "Random Forest"],
    desc: "Built a machine learning model to predict customer churn using banking customer data. Conducted exploratory data analysis, trained a Random Forest classifier, and developed a Power BI dashboard to identify churn drivers and high-risk customers",
    link: "https://github.com/EssisDez/Customer-Churn-Prediction-Power-BI-ML-.git",
    images: [
    "/ChurnByProduct.png",
    "/ChurnByRetained.png",
    "/ChurnByGeography.png",
    ],
  },
  {
    title: "E-Commerce Executive Dashboard (Tableau)",
    tools: ["Tableau", "Business Analytics", "Data Visualization"],
    desc: "Designed an executive dashboard to monitor sales performance, customer behavior, and key business KPIs through interactive Tableau visualizations.",
    link: "https://github.com/EssisDez/E-Commerce-Executive-Dashboard.git",
    images: [
      "/SalesTrendOverTime.jpeg",
      "/sales_forecast.png",
      "/sales_forecast.png",
    ],
  },
  {
    title: "Banking Profitability Optimization",
    tools: ["Python", "Optimization", "Financial Modeling"],
    desc: "Developed a mathematical optimization model to maximize Net Interest Income while accounting for borrower default risk",
    link: "https://github.com/EssisDez/Banking-Application.git",
    images: [
      "/nii_analysis.png",
      "/default_risk_analysis.png",
      "/nii_analysis.png",
    ],
  },
  {
    title: "Marketing Analysis",
    tools: ["Python", "Forecasting", "Machine Learning", "Customer Segmentation"],
    desc: "A marketing analytics project that combines customer segmentation, sales forecasting, and AI-driven recommendations to support business decision-making",
    link: "https://github.com/EssisDez/marketing_analytics_ai_project.git",
    images: [
      "/sales_forecast.png",
      "/country_sales.png",
      "/top_products (1).png",

    ],
  },
  {
    title: "Supply Chain Management",
    tools: ["Power BI", "Supply Chain Analytics", "Data Modeling"],
    desc: "Analyzed inventory, supplier performance, and logistics operations to identify cost-saving opportunities and improve supply chain efficiency through data-driven optimization",
    link: "https://github.com/EssisDez/Supply_Chain_Analysis.git",
    images: [
      "/supplier_by_sales.png",
      "/inventory_by_category.png",
      "/supply_chain_flow.png",
    ],
  },
  {
    title: "Industrial Maintenance Analytics",
    tools: ["Power BI", "Predictive Analytics", "KPI Monitoring"],
    desc: "This platform helps industrial operations teams monitor machine reliability, detect operational risks, and optimize maintenance planning",
    link: "https://github.com/EssisDez/Industrial_Maintenance_Analytics.git",
    images: [
      "/6b3141a1cb1fc48c8880855b71d613e4.jpg",
      "/6b3141a1cb1fc48c8880855b71d613e4.jpg",
      "/6b3141a1cb1fc48c8880855b71d613e4.jpg",

    ],
  },
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
            Turning Data into Decisions
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Applying data science and business analytics to solve real-world business problems
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

                <img
                   src={project.images[0]}
                   alt={project.title}
                   onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                   className="h-48 w-full object-cover rounded-2xl cursor-pointer hover:scale-105 transition duration-300"
                   />

                <h3 className="text-2xl font-bold mt-6">
                   {project.title}
                </h3>

<div className="flex flex-wrap gap-2 mt-4">
  {project.tools.map((tool, idx) => (
    <span
      key={idx}
      className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full"
    >
      {tool}
    </span>
  ))}
</div>

<p className="text-gray-600 mt-4 leading-7">
  {project.desc}
</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-6 text-emerald-600 font-semibold hover:underline"
                  >
                 View Project →
                </a>

              </div>

            ))}

          </div>

        </section>

      

      </main>

     {selectedProject && (
  <div
    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="relative max-w-5xl w-[90%]"
      onClick={(e) => e.stopPropagation()}
    >

      {/* Close */}
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg z-10"
      >
        <FaTimes />
      </button>

      {/* Previous */}
      <button
        onClick={() =>
          setCurrentImageIndex(
            currentImageIndex === 0
              ? selectedProject.images.length - 1
              : currentImageIndex - 1
          )
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-lg z-10"
      >
        ←
      </button>

      {/* Next */}
      <button
        onClick={() =>
          setCurrentImageIndex(
            currentImageIndex === selectedProject.images.length - 1
              ? 0
              : currentImageIndex + 1
          )
        }
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-lg z-10"
      >
        →
      </button>

      <img
  src={selectedProject.images[currentImageIndex]}
  alt="Project Preview"
  onClick={(e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (clickX < rect.width / 2) {
      setCurrentImageIndex(
        currentImageIndex === 0
          ? selectedProject.images.length - 1
          : currentImageIndex - 1
      );
    } else {
      setCurrentImageIndex(
        currentImageIndex === selectedProject.images.length - 1
          ? 0
          : currentImageIndex + 1
      );
    }
  }}
  className="rounded-3xl w-full max-h-[80vh] object-contain shadow-2xl cursor-pointer"
/>

      <div className="text-center mt-4 text-white font-semibold">
        {currentImageIndex + 1} / {selectedProject.images.length}
      </div>

    </div>
  </div>
)}
     
    
    </div>
  );
}