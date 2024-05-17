<script lang="ts">
  export let routeMetricsResponse: RouteResponse; // prop

  import 'chart.js/auto'; // lazy loading
  import t from '../lib/t.js';
  import {type ChartData, Chart} from 'chart.js';
  import type { RouteResponse } from '../lib/response-types';
  import { Line } from 'svelte-chartjs';
  import plugin from '@idrinth-api-bench/chartjs-plugin-stdev-filler/src/index.js'
  let data: ChartData<'line'>;

  Chart.register(plugin)

  $: {
    data = {
      labels: Object.keys(routeMetricsResponse),
      datasets: [
        {
          data: Object.values(routeMetricsResponse).map(metrics => metrics.mean80 ? Number(metrics.mean80) / 1000000 : 0),
          label: 'mean80',
          tension: 0.1,
        },
        {
          data: Object.values(routeMetricsResponse).map(metrics => metrics.avg80 ? Number(metrics.avg80) / 1000000 : 0),
          label: 'avg80',
          tension: 0.1,
          stdev: Object.values(routeMetricsResponse).map(metrics => metrics.stdv80 ? Number(metrics.stdv80) / 1000000 : 0),
        },
        {
          data: Object.values(routeMetricsResponse).map(metrics => metrics.mean100 ? Number(metrics.mean100) / 1000000 : 0),
          label: 'mean100',
          tension: 0.1,
        },
        {
          data: Object.values(routeMetricsResponse).map(metrics => metrics.avg100 ? Number(metrics.avg100) / 1000000 : 0),
          label: 'avg100',
          tension: 0.1,
          stdev: Object.values(routeMetricsResponse).map(metrics => metrics.stdv100 ? Number(metrics.stdv100) / 1000000 : 0),
        },
      ]
    };
  }
</script>

<h2>{t('global-performance-chart.title')}</h2>
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
