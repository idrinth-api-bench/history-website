<script lang="ts">
  import RouteGuard from "./RouteGuard.svelte";
  import {navigate, Route} from "svelte-routing";

  export let path: string;
</script>

<Route {path} let:params let:location>
  <RouteGuard>
    <slot {params} {location} {navigate} />
  </RouteGuard>
</Route>
