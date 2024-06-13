<script lang="ts">
  import { navigate, Route } from "svelte-routing";
  import RouteGuard from "./RouteGuard.svelte";

  export let path: string;
</script>

<Route {path} let:params let:location>
  <RouteGuard>
    <slot {params} {location} {navigate} />
  </RouteGuard>
</Route>
