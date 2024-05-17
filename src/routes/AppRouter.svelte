<script>
  import { Route, Router } from "svelte-routing";
  import PrivateRoute from "./PrivateRoutes.svelte";
  import Login from "../Login.svelte";
  import Home from '../Home.svelte';
  import View1 from "../View1.svelte";
  import View2 from "../View2.svelte";
  import View3 from "../View3.svelte";
  import Header from '../components/Header.svelte';
</script>

<Router>
  <Header/>
  <Route path="/login">
    <Login/>
  </Route>
  <PrivateRoute path="/">
    <Home/>
  </PrivateRoute>
  <PrivateRoute path="/view-1">
    <View1/>
  </PrivateRoute>
  <PrivateRoute path="/view-2">
    <View2/>
  </PrivateRoute>
  <PrivateRoute path="/view-3">
    <View3/>
  </PrivateRoute>
</Router>
