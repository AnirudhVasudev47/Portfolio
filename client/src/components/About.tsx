const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-12 items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="rounded-lg shadow-xl overflow-hidden bg-gradient-to-br from-primary/5 to-gray-50 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/assets/developer-8764521_1280 2.jpg" 
                alt="Developer at night coding with city view"
                className="w-full h-auto object-cover" 
                style={{ maxHeight: '450px' }}
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Gen AI Engineer · LLMs, RAG & Agentic AI
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Gen AI Engineer with 5+ years of experience building production-grade Generative AI systems,
              Agentic AI pipelines, and cloud-native backends. Hands-on expertise in LLM application
              development (GPT, Claude, Gemini), RAG architectures, vector search, prompt engineering, and
              fine-tuning using Python and LangChain.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I deploy GenAI workloads on AWS (SageMaker, Lambda) and GCP (Vertex AI) with CI/CD pipelines and
              containerized microservices. My M.Sc. in Data Science gives me deep foundations in machine
              learning, deep learning, and NLP.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              My background spans healthtech, fintech, and enterprise consulting — shipping GenAI products
              from prototype to production.
            </p>

            <h4 className="text-lg font-bold mb-3">Highlights</h4>
            <ul className="mb-8 space-y-3">
              <li className="flex text-gray-700">
                <span className="text-primary mr-2 mt-1 flex-shrink-0" aria-hidden="true">
                  <i className="ri-rocket-line"></i>
                </span>
                <span>
                  Founded <strong>Tranna</strong>, a road safety rewards startup incubated at IIM Bangalore
                  NSRCEL — built on React Native + FastAPI with GPS-based agentic scoring and real-time trip
                  analysis.
                </span>
              </li>
              <li className="flex text-gray-700">
                <span className="text-primary mr-2 mt-1 flex-shrink-0" aria-hidden="true">
                  <i className="ri-trophy-line"></i>
                </span>
                <span>
                  Advanced to the final audition round of <strong>Shark Tank India Season 1</strong>, pitching
                  an AI-driven road safety product built from scratch.
                </span>
              </li>
              <li className="flex text-gray-700">
                <span className="text-primary mr-2 mt-1 flex-shrink-0" aria-hidden="true">
                  <i className="ri-line-chart-line"></i>
                </span>
                <span>
                  Contributed to infrastructure supporting <strong>₹6 Cr.</strong> in annual investor capital at
                  BHIVE Alts, and led TypeScript adoption that cut production bugs by 50%.
                </span>
              </li>
              <li className="flex text-gray-700">
                <span className="text-primary mr-2 mt-1 flex-shrink-0" aria-hidden="true">
                  <i className="ri-book-2-line"></i>
                </span>
                <span>
                  Published research in IJCRT: "Ride-Along Application" — Paper ID: IJCRT2106046.
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                LLMs
              </span>
              <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
                RAG
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-accent rounded-full text-sm font-medium">
                Agentic AI
              </span>
              <span className="px-3 py-1 bg-green-100 text-secondary rounded-full text-sm font-medium">
                LangChain
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                AWS & GCP
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Python
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
