<script lang="ts">
  export let projectMetricsResponse: ProjectsResponse; // prop

  import 'chart.js/auto'; // lazy loading
  import type { ChartData, Point } from 'chart.js';
  import { Line } from 'svelte-chartjs';
  import type { Writable } from 'svelte/store';
  import { writable } from 'svelte/store';
  import type { ProjectMetrics, ProjectsResponse } from '../lib/response-types';
  import t from '../lib/t.js';

  export const selectedMetric: Writable<keyof ProjectMetrics> = writable('mean');

  let data: ChartData<"line", (number | Point)[], unknown>;

  $: {
    data = {
      labels: Array.from(new Set(Object.values(projectMetricsResponse).map(projectMetrics => Object.keys(projectMetrics)).flat())),
      datasets: Object.keys(projectMetricsResponse).map(project => (
        {
          data: Object.values(projectMetricsResponse[ project ]).map(metrics => metrics[ $selectedMetric ] ? Number(metrics[ $selectedMetric ]) : 0),
          fill: false,
          label: project,
          tension: 0.1
        }
      )),
    };
  }
</script>

<h2>{t('global-performance-chart.title')}</h2>
<select bind:value={$selectedMetric}>
  <option value="mean">{t('global-performance-chart.mean')}</option>
  <option value="average">{t('global-performance-chart.average')}</option>
</select>
{#if data}
  <Line {data}/>
{:else}
  <p>{t('loading')}</p>
{/if}
