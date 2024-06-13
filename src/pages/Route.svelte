<script async lang="ts">
  import RoutePerformanceLineChart from '../components/RoutePerformanceLineChart.svelte';
  import { getRoute } from '../lib/http-client.js';
  import type { RouteResponse } from '../lib/response-types';
  import t from "../lib/t";

  export let route: string = '';
  export let project: string = '';
  
  let routeMetricsResponse: RouteResponse;
  (async () => {
    routeMetricsResponse = await getRoute(project, route);
  })();
</script>

<div class="route">
  <h1>{t('route.title')}: {project} : {route}</h1>
  <p>{t('route.description')}</p>

  {#if routeMetricsResponse}
    <RoutePerformanceLineChart {routeMetricsResponse}/>
  {/if}
</div>
