import { ArrowRight, PlayCircle } from 'react-feather';

import { Badge } from '@/components/badge';
import Button from '@/components/button';
import { FaqSection } from '@/components/FaqSection/FaqSection';
import { Hero } from '@/components/hero';
import Quotes from '@/components/Quote/Quotes';
import Features from '@/data/features';
import Technologies from '@/data/technologies';

export default function Home() {
  return (
    <div>
      <section className="bg-gray-50">
        <Hero>
          <Badge className="mb-4" variant="blue">
            <Badge.Title>New feature</Badge.Title>
            <Badge.Content>Check out the team dashboard</Badge.Content>
            <ArrowRight height={20} width={40} />
          </Badge>
          <Hero.Title>Beautiful analytics to grow smarter</Hero.Title>
          <Hero.Subtitle>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </Hero.Subtitle>
          <Button
            variant="outline"
            className="flex w-full flex-row items-center justify-center gap-3 md:w-auto"
          >
            <PlayCircle />
            Demo
          </Button>
        </Hero>
      </section>
      <section>
        <Hero>
          <Hero.Title>Verilerle Topluluk</Hero.Title>
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
              <p className="text-lg font-medium text-gray-900">
                Topluluk Üyesi
              </p>
            </li>
          </ul>
        </Hero>
      </section>
      <section className="bg-gray-50 pb-12">
        <Hero>
          <Hero.Title>Teknoloji ve Araçlar</Hero.Title>
          <Hero.Subtitle>
            Toplulukta, geliştirme sürecinin her aşamasına dokunan teknoloji ve
            araçlar tartışılıp, deneyimler paylaşılmaktadır.
          </Hero.Subtitle>

          <ul className="mb-16 grid grid-cols-4 gap-4 md:mt-4 md:grid-cols-8 md:gap-8">
            {Technologies.map(({ id, icon: TechnologyIcon, name }) => (
              <li key={id} aria-label={name}>
                <TechnologyIcon />
              </li>
            ))}
          </ul>

          <Button variant="filled">View All Technologies</Button>
        </Hero>
      </section>
      <section className="mx-auto max-w-7xl">
        <Hero>
          <Hero.Label>Features</Hero.Label>
          <Hero.Title>Frontendship’te ne yapıyoruz?</Hero.Title>
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
      </section>
      <section className="bg-gray-50 py-16 md:py-24">
        <Quotes />
      </section>
      <section>
        <FaqSection />
      </section>
    </div>
  );
}
