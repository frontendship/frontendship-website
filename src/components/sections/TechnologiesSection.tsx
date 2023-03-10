import { Button, Container, Hero } from '@/components';
import Technologies from '@/data/technologies';

export const TechnologiesSection = () => {
  return (
    <div className="bg-gray-50">
      <Container>
        <Hero>
          <Hero.Title size="sm">Teknoloji ve Araçlar</Hero.Title>
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
      </Container>
    </div>
  );
};
