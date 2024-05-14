<script lang="ts">
  import {user} from "../stores";
  import {useLocation, navigate} from "svelte-routing";

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
