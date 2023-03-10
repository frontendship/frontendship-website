import { Container, Hero, TeamCard } from '@/components';

const AboutPage = () => {
  return (
    <div>
      <Container>
        <Hero>
          <Hero.Label>The team</Hero.Label>
          <Hero.Title>Meet the team behind Frontendship</Hero.Title>
          <Hero.Subtitle>
            We’re a small team that loves to create great experiences and make
            meaningful connections between builders and customers. Join our
            remote ream!
          </Hero.Subtitle>
        </Hero>
      </Container>

      <section className="mx-auto grid max-w-7xl md:grid-cols-3 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4 md:gap-x-8 md:gap-y-16 gap-y-10 md:px-8 px-4 pb-24">
        <TeamCard>
          <TeamCard.Image
            alt="asda"
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          />
          <TeamCard.Title>John Doe</TeamCard.Title>
          <TeamCard.SubTitle>CEO</TeamCard.SubTitle>
          <TeamCard.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem.
          </TeamCard.Description>
        </TeamCard>
      </section>
    </div>
  );
};

export default AboutPage;
