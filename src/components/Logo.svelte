<script lang="ts">
  import { Link } from "svelte-routing";
  import logo from '@idrinth-api-bench/assets/iab.svg';
</script>

<Link to="/">
  <img src={logo} class="logo" alt="Logo"/>
</Link>

<style>
  .logo {
    cursor: pointer;
    height: 30px;
    transition: filter 300ms;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 0.50rem #646cff);
  }
</style>
