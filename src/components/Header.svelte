<script lang="ts">
  import Logo from "./Logo.svelte";
  import { Link } from 'svelte-routing';
  import { logout } from '../lib/http-client';
  import { user } from '../stores';
</script>

<header>
  <Logo/>
  {#if $user}
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/view-1">View 1</Link>
      </li>
      <li>
        <Link to="/view-2">View 2</Link>
      </li>
      <li>
        <Link to="/view-3">View 3</Link>
      </li>
    </ul>
    <button on:click={logout}>Logout</button>
  {/if}
</header>

<style>
  header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  header ul {
    display: flex;
    gap: 16px;
    list-style-type: none;
  }

  :global(header ul li a) {
    color: var(--text-color);

    &:hover {
      text-decoration: underline;
    }
  }

  :global(a[aria-current="page"]) {
    text-decoration: underline;
  }
</style>
