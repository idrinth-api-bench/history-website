<script lang="ts">
  import { navigate, useLocation } from "svelte-routing";
  import { user } from "../stores";

  const location = useLocation();

  $: if (!$user) {
    navigate("/login", {
      state: {from: $location.pathname},
      replace: true,
    });
  }
</script>

{#if $user}
  <slot/>
{/if}
