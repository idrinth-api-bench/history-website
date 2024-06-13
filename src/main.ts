import '@idrinth-api-bench/assets/colors.css';
import './app.css';
import App from './App.svelte';

const app = new App({
  // @ts-expect-error
  target: document.getElementById('app',),
},);

export default app;
