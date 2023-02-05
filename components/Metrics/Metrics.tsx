import React from 'react';
import { Zap } from 'react-feather';

import Metrics from '@/data/metrics';
import type { Metric } from '@/types';

const MetricItem = ({ label, value }: Metric) => (
  <div className="flex w-60 flex-col gap-y-3 ">
    <h5 className="text-6xl font-semibold text-violet-600">{value}</h5>
    <p className="text-xl text-gray-900">{label}</p>
  </div>
);

const MetricsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center gap-y-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-violet-600">
          <Zap size={22} />
        </div>
        <h1 className="text-3xl font-semibold text-gray-900">
          Verilerle Topluluk
        </h1>
        <p className="text-xl text-gray-500">
          Topluluğumuzu verilerle tanıyın,
        </p>
      </div>
      <div className="mt-16 flex flex-col gap-y-6 md:flex-row md:gap-y-0 md:divide-x  md:divide-gray-200">
        {Metrics.map((metric, index) => (
          <MetricsSection.MetricItem key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

MetricsSection.MetricItem = MetricItem;

export default MetricsSection;
