import { Container, Hero } from '@/components';
import Features from '@/data/features';

export const FeaturesSection = () => {
  return (
    <section className="mx-auto max-w-7xl">
      <Container>
        <Hero>
          <Hero.Label>Features</Hero.Label>
          <Hero.Title size="sm">Frontendship’te ne yapıyoruz?</Hero.Title>
          <Hero.Subtitle>
            Her seviyeden geliştiricinin potansiyelini artırmak adına topluluğa
            ve ekosisteme faydalı projeler ve içerikler sunmayı hedefliyoruz.
          </Hero.Subtitle>
          <ul className="mt-12 grid w-full gap-x-9 gap-y-16 pb-12 md:mt-16 md:grid-cols-3">
            {Features.map(({ id, icon: FeatureIcon, title, description }) => (
              <li key={id} className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-8 border-blue-50 bg-blue-100">
                  <FeatureIcon className="stroke-blue-600" />
                </div>
                <span className="mt-5 text-xl font-medium text-gray-900">
                  {title}
                </span>
                <p className="mt-2 text-gray-500 ">{description}</p>
              </li>
            ))}
          </ul>
        </Hero>
      </Container>
    </section>
  );
};
