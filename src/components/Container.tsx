import React from 'react';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <section className="py-16 px-4 md:py-24 md:px-8 ">{children}</section>;
};
