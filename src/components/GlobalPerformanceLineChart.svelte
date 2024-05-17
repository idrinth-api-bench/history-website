<script lang="ts">
  export let projectMetricsResponse: ProjectsResponse; // prop

  import 'chart.js/auto'; // lazy loading
  import t from '../lib/t.js';
  import {type ChartData, Chart} from 'chart.js';
  import type { ProjectMetrics, ProjectsResponse } from '../lib/response-types';
  import type { Writable } from 'svelte/store';
  import { Line } from 'svelte-chartjs';
  import plugin from '@idrinth-api-bench/chartjs-plugin-stdev-filler/src/index.js'
  import { writable } from 'svelte/store';

  export const selectedMetric: Writable<keyof ProjectMetrics> = writable('mean');

  let data: ChartData<'line'>;

  Chart.register(plugin)

  $: {
    data = {
      labels: Array.from(new Set(Object.values(projectMetricsResponse).map(projectMetrics => Object.keys(projectMetrics)).flat())),
      datasets: Object.keys(projectMetricsResponse).map(project => (
        {
          data: Object.values(projectMetricsResponse[ project ]).map(metrics => metrics[ $selectedMetric ] ? Number(metrics[ $selectedMetric ])/1000000 : 0),
          label: project,
          tension: 0.1,
          stdev: Object.values(projectMetricsResponse[ project ]).map(metrics =>  metrics[ $selectedMetric ] ? Number(metrics[ $selectedMetric ])/1000000 * Math.random() * 0.5 : 0),
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
  <Line {data} options="{{
        scales: {
          y: {
            beginAtZero: true,
            max: 7,
          }
        }
      }}"/>
{:else}
  <p>{t('loading')}</p>
{/if}
