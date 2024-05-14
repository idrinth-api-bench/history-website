<script async lang="ts" context="module">
  import { Line } from 'svelte-chartjs'
  import 'chart.js/auto'; // lazy loading
  import { getProjects } from './lib/http-client.js';
  import type { ChartData } from 'chart.js';
  import t from "./lib/t";

  const response = await getProjects();

  export const lineChartData: ChartData<'line'> =
    {
      labels: Array.from(new Set(Object.values(response).map(projectMetrics => Object.keys(projectMetrics)).flat())),
      datasets: Object.keys(response).map(project => (
        {
          data: Object.values(response[ project ]).map(metrics => metrics.mean ? Number(metrics.mean) : 0),
          fill: false,
          label: project,
          tension: 0.1
        }
      )),
    };
</script>

<div class="view-1">
  <!-- TODO: translate -->
  <h1>{t('view-1.title')}</h1>
  <p>{t('view-1.description')}</p>

  <h2>{t('view-1.global-performance')}</h2>
  {#if lineChartData}
    <Line data="{lineChartData}"/>
  {/if}
</div>

<style>

</style>
