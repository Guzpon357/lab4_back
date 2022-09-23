import { TestRouter, UserRouter } from "../components";
const listRoutes = [["/test", TestRouter],["/user", UserRouter]];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
