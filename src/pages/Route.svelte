<script async lang="ts" context="module">
  export let route: string = '';
  export let project: string = '';

  import t from "../lib/t";
  import { getRoute } from '../lib/http-client.js';
  import type { RouteResponse } from '../lib/response-types';
  import RoutePerformanceLineChart from '../components/RoutePerformanceLineChart.svelte';
  const routeMetricsResponse: RouteResponse = await getRoute(project, route);
</script>
<script>
</script>

<div class="route">
  <h1>{t('route.title')}: {project} : {route}</h1>
  <p>{t('route.description')}</p>

  <RoutePerformanceLineChart {routeMetricsResponse}/>
</div>
