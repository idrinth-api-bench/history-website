<script lang="ts">
  import Logo from "./Logo.svelte";
  import { Link } from 'svelte-routing';
  import { logout } from '../lib/http-client';
  import { user } from '../stores';
</script>

<header>
  <Link to="/">
    <Logo/>
  </Link>
  {#if $user}
    <button on:click={logout}>Logout</button>
  {/if}
</header>

<style>
  header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
</style>
