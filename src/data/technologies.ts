import type { Technology } from 'types';

import {
  AngularIcon,
  DockerIcon,
  FigmaIcon,
  GithubIcon,
  GitIcon,
  HTMLIcon,
  JavaScriptIcon,
  NodeIcon,
  NpmIcon,
  ReactIcon,
  ReduxIcon,
  TypeScriptIcon,
  VisualStudioIcon,
  VueIcon,
  WebpackIcon
} from '@/assets/icons';

const Technologies: Technology[] = [
  {
    id: 1,
    icon: ReactIcon,
    name: 'React'
  },
  {
    id: 2,
    icon: VueIcon,
    name: 'Vue'
  },
  {
    id: 3,
    icon: JavaScriptIcon,
    name: 'JavaScript'
  },
  {
    id: 4,
    icon: GithubIcon,
    name: 'Github'
  },
  {
    id: 5,
    icon: DockerIcon,
    name: 'Docker'
  },
  {
    id: 6,
    icon: GitIcon,
    name: 'Git'
  },
  {
    id: 7,
    icon: HTMLIcon,
    name: 'HTML'
  },
  {
    id: 8,
    icon: FigmaIcon,
    name: 'Figma'
  },
  {
    id: 9,
    icon: AngularIcon,
    name: 'Angular'
  },
  {
    id: 10,
    icon: TypeScriptIcon,
    name: 'TypeScript'
  },
  {
    id: 11,
    icon: NodeIcon,
    name: 'Node'
  },
  {
    id: 12,
    icon: VisualStudioIcon,
    name: 'Visual Studio'
  },
  {
    id: 13,
    icon: ReduxIcon,
    name: 'Redux'
  },
  {
    id: 14,
    icon: NpmIcon,
    name: 'Npm'
  },
  {
    id: 15,
    icon: WebpackIcon,
    name: 'Webpack'
  }
];

export default Technologies;
