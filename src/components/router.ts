import { UiHookPayload } from "@zeit/integration-utils";
import { ApiType } from "../api";

const matchesRoute = (allRoutes: string[], matchRoute: string) =>
  allRoutes.some(r => matchRoute.startsWith(r));

export const Route = (
  req: UiHookPayload,
  api: ApiType,
  routes: string[] | string,
  component: Function,
  routeProps: Record<string, any> = {}
) => {
  const parsedRoutes = Array.isArray(routes) ? routes : [routes];

  if (matchesRoute(parsedRoutes, req.action)) {
    return component(routeProps, req, api);
  }

  return "";
};

const useRouter = (req: UiHookPayload, api: ApiType) =>
  Route.bind(undefined, req, api);

export default useRouter;
