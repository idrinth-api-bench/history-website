<script lang="ts" context="module">
  import t from "./lib/t";
  import { login } from './lib/http-client';
  import { navigate } from "svelte-routing";

  export let username = '';

  async function handleSubmit() {
    try {
      await login(username);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  }
</script>

<div class="login">
  <h1>{t('login.title')}</h1>
  <form on:submit|preventDefault="{handleSubmit}">
    <input
      class="form-field"
      placeholder="{t('login.username')}"
      type="text"
      bind:value="{username}"
    />
    <button type="submit">
      {t('login.submit')}
    </button>
  </form>
</div>
