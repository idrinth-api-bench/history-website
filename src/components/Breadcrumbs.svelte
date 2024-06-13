<script lang="ts">
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';

  let segments: { name: string; path: string }[] = [];

  function updateSegments() {
    const path = window.location.pathname;
    const pathSegments = path.split('/').filter(Boolean);
    segments = pathSegments.map((segment, index) => {
      return {
        name: decodeURIComponent(segment),
        path: '/' + pathSegments.slice(0, index + 1).join('/')
      };
    });
  }

  onMount(updateSegments);

  function navigateTo(path: string) {
    navigate(path);
    updateSegments();
  }
</script>

<nav aria-label="Breadcrumb">
  <ol>
    <li>
      <a href="/" on:click|preventDefault={() => navigateTo('/')}>Home</a>
    </li>
    {#each segments as { name, path }, index (name)}
      <li>
        <a href={path} on:click|preventDefault={() => navigateTo(path)}>{name}</a>
      </li>
    {/each}
  </ol>
</nav>

<style>
  ol {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
  }
  li:not(:last-child)::after {
    content: '>';
    margin: 0 8px;
  }
  a {
    text-decoration: none;
  }
</style>