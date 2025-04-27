import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import walpaper from "@/assets/wallhaven-9dg5vk.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="sobre" className="py-20 bg-darklight" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="w-full h-[450px] rounded-2xl overflow-hidden bg-gradient-to-tr from-primary/30 to-primary/10 flex items-center justify-center">
                <img
                  src={walpaper}
                  alt="Equipe Andreolla Tech em reunião"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 md:w-64 md:h-64 rounded-2xl bg-primary/10 -z-10"></div>
            </div>
          </motion.div>

          <div>
            <motion.div variants={itemVariants}>
              <div className="section-badge">
                Sobre Nós
              </div>
            </motion.div>

            <motion.h2 variants={itemVariants} className="section-title">
              Somos especialistas em transformação digital
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              Fundada em 2019, a Andreolla Tech nasceu com o propósito de simplificar a tecnologia para empresas de todos os portes. Unimos criatividade e expertise técnica para entregar soluções que impulsionam o crescimento dos negócios.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300 mb-8">
              Nossa equipe combina profissionais experientes com talentos emergentes, garantindo ideias inovadoras sem abrir mão da solidez técnica. Acreditamos em parcerias de longo prazo e no poder da tecnologia como catalisadora de transformações.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300 mb-8">
              Transforme seu negócio com soluções tecnológicas de alta performance. Nós <b style={{ textDecoration: 'underline' }}>aceleramos negócios</b> e <b style={{ textDecoration: 'underline' }}>construímos resultados reais</b> através da tecnologia.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Segurança</h3>
                  <p className="text-gray-400 text-sm">Dados protegidos</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Performance</h3>
                  <p className="text-gray-400 text-sm">Soluções otimizadas</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Agilidade</h3>
                  <p className="text-gray-400 text-sm">Entregas no prazo</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div >
    </section >
  );
};

export default AboutSection;
