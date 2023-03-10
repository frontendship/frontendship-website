import { Container, Hero } from '@/components';

export const MetricsSection = () => {
  return (
    <Container>
      <Hero>
        <Hero.Title size="md">Verilerle Topluluk</Hero.Title>
        <Hero.Subtitle>Topluluğumuzu verilerle tanıyın,</Hero.Subtitle>
        <ul className="mt-8 max-w-3xl space-y-8 pb-4 md:mt-16 md:grid md:grid-cols-3 md:space-y-px">
          <li className="flex flex-col items-center justify-center space-y-3 border-r-gray-200 md:border-r md:pr-4">
            <span className="text-5xl font-semibold text-blue-600 md:text-6xl">
              25
            </span>
            <p className="text-lg font-medium text-gray-900">
              Açık Kaynak Projelere Katkıda Bulunanlar
            </p>
          </li>
          <li className="flex flex-col items-center justify-center space-y-3 border-r-gray-200 md:border-r md:px-4">
            <span className="text-5xl font-semibold text-blue-600 md:text-6xl">
              ~500
            </span>
            <p className="text-lg font-medium text-gray-900">
              Günlük Aktif Üye
            </p>
          </li>
          <li className="flex flex-col items-center justify-center space-y-3 pl-4">
            <span className="text-5xl font-semibold text-blue-600 md:text-6xl">
              1k+
            </span>
            <p className="text-lg font-medium text-gray-900">Topluluk Üyesi</p>
          </li>
        </ul>
      </Hero>
    </Container>
  );
};
