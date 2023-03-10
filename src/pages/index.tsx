import { ArrowRight, PlayCircle } from 'react-feather';

import { Badge, Button, Container, Hero } from '@/components';
import { FaqSection } from '@/components/sections/FaqSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { QuotesSection } from '@/components/sections/QuotesSection';
import { TechnologiesSection } from '@/components/sections/TechnologiesSection';

export default function Home() {
  return (
    <>
      <section className="bg-gray-50">
        <Container>
          <Hero>
            <Badge className="mb-4" variant="blue">
              <Badge.Title>New feature</Badge.Title>
              <Badge.Content>Check out the team dashboard</Badge.Content>
              <ArrowRight height={20} width={40} />
            </Badge>
            <Hero.Title size="lg">
              Beautiful analytics to grow smarter
            </Hero.Title>
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
        </Container>
      </section>

      <MetricsSection />
      <TechnologiesSection />
      <FeaturesSection />
      <QuotesSection />
      <FaqSection />
    </>
  );
}
