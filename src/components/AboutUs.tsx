const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                A Confiança de Empresas
                <span className="text-red-500 block">em Todo o Brasil</span>
              </h2>
              <div className="w-20 h-1 bg-red-500 rounded-full"></div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Por mais de 25 anos, a DA ELITE Express tem sido a espinha
                dorsal das cadeias de suprimentos em toda a América do Norte. De
                costa a costa, construímos nossa reputação com base na
                confiabilidade inabalável, tecnologia de ponta e um compromisso
                absoluto com a segurança, que nos renderam certificações líderes
                do setor e padrões de segurança de tolerância zero.
              </p>

              <p className="text-lg">
                Nossa extensa rede abrange todas as principais rodovias e
                centros logísticos, permitindo-nos fornecer soluções
                abrangentes, desde entregas locais até transporte de carga
                intercontinental. Com uma frota moderna de mais de 500 veículos
                e uma equipe de profissionais certificados, não apenas
                transportamos cargas — nós impulsionamos o seu negócio com
                precisão, velocidade e cuidado.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gray-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-red-500 mb-1">500+</div>
                <div className="text-sm text-gray-400">Veículos Modernos</div>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-red-500 mb-1">48</div>
                <div className="text-sm text-gray-400">Estados Cobertos</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/frota.png"
              alt="Frota de caminhões DA ELITE Express"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-lg shadow-xl">
              <div className="text-sm font-medium text-red-500 mb-1">
                SEGURANÇA EM PRIMEIRO LUGAR
              </div>
              <div className="text-lg font-bold">Certificado DOT</div>
              <div className="text-sm text-gray-300">
                Registro zero de incidentes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
