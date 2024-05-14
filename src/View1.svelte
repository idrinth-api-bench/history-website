<script async lang="ts" context="module">
  import { Line } from 'svelte-chartjs'
  import 'chart.js/auto'; // lazy loading
  import { getProjects } from './lib/http-client.js';
  import type { ChartData } from 'chart.js';

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
  <h1>View 1</h1>
  <p>A line graph per project to compare their global performance(user choice of Average or Median) + a bar graph with
     the error count</p>

  <h2>Global Performance</h2>
  {#if lineChartData}
    <Line data="{lineChartData}"/>
  {/if}
</div>

<style>

</style>
