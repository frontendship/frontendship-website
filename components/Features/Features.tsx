import Button from '@/components/Button/Button';

import { Icons } from './constants';

const FeaturesHeader = () => {
  return (
    <div className="mx-auto min-w-[343px] max-w-3xl px-4">
      <p className="bg-violet-700 text-center text-sm font-semibold md:text-base">
        Integrations
      </p>
      <h3 className="mt-3 text-center text-3xl font-semibold text-gray-900 md:text-4xl">
        Get more value from your tools
      </h3>
      <p className="mt-4 text-center  text-lg font-normal text-gray-500 md:mt-5 md:text-xl">
        Connect your tools, connect your teams. With over 200 apps already
        available in our directory, your team`s favourite tools are just a click
        away.
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-12 md:space-y-16">
      <FeaturesHeader />
      <div className="grid grid-cols-4 grid-rows-4 gap-4 px-8 md:grid-cols-8  md:grid-rows-2 md:gap-8">
        {Icons.map(FeatureIcon => (
          <div
            key={FeatureIcon.id}
            className="flex items-center justify-center"
          >
            <FeatureIcon.component
              className="h-16 w-16 md:h-20 md:w-20"
              color="#383838"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Button size="xl">View all integrations</Button>
      </div>
    </div>
  );
};
export default Features;
