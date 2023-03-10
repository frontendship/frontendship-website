import React from 'react';

export function AuthorCard({ children }: { children: React.ReactNode }) {
  return <figure className="flex flex-row gap-3  w-full">{children}</figure>;
}

AuthorCard.Avatar = function AuthorAvatar({
  source
}: {
  source: { src: string; alt: string };
}) {
  return (
    <img
      src={source?.src}
      className="h-12 w-12 rounded-full object-center object-cover"
      alt={source?.alt}
    />
  );
};

AuthorCard.Info = function AuthorInfo({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col w-full">{children}</div>;
};

AuthorCard.Name = function AuthorName({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="text-gray-900 text-base font-medium">{children}</span>
  );
};

AuthorCard.Position = function AuthorPosition({
  children
}: {
  children: string;
}) {
  return <span className="text-gray-500 text-base leading-6">{children}</span>;
};
