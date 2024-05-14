<script async lang="ts" context="module">
  import GlobalPerformanceLineChart from './components/GlobalPerformanceLineChart.svelte';
  import { getProjects } from './lib/http-client.js';
  import type { ProjectsResponse } from './lib/response-types';
  import t from "./lib/t";

  const projectMetricsResponse: ProjectsResponse = await getProjects();
</script>

<div class="view-1">
  <h1>{t('view-1.title')}</h1>
  <p>{t('view-1.description')}</p>

  <GlobalPerformanceLineChart {projectMetricsResponse}/>
</div>
