import { LazyExoticComponent, ReactNode, lazy } from 'react';

import Paths from './constants/path';

const Form = lazy(() => import('./pages/Form/Form'));

type TRoute = {
  name: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element>;
  Fallback: ReactNode | null;
};

const routes = [
  {
    name: 'form',
    path: Paths.FORM,
    Component: Form,
    Fallback: null,
  },
] as TRoute[];

export default routes;
