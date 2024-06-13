<script>
  import { Route, Router } from "svelte-routing";
  import Breadcrumbs from "../components/Breadcrumbs.svelte";
  import Header from '../components/Header.svelte';
  import Login from "../pages/Login.svelte";
  import ProjectPage from "../pages/Project.svelte";
  import ProjectsPage from "../pages/Projects.svelte";
  import RoutePage from "../pages/Route.svelte";
  import PrivateRoute from "./PrivateRoutes.svelte";
</script>

<Router>
  <Header/>
  <Breadcrumbs />
  <Route path="/login">
    <Login/>
  </Route>
  <PrivateRoute path="/">
    <ProjectsPage/>
  </PrivateRoute>
  <PrivateRoute path="/:project" let:params>
    <ProjectPage project={params.project} />
  </PrivateRoute>
  <PrivateRoute path="/:project/:route" let:params>
    <RoutePage project={params.project} route={params.route}/>
  </PrivateRoute>
</Router>
