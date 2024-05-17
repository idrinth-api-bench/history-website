<script async lang="ts" context="module">
  import t from "../lib/t";
  import { getProjects } from '../lib/http-client.js';
  import type { ProjectsResponse } from '../lib/response-types';
  import GlobalPerformanceLineChart from '../components/GlobalPerformanceLineChart.svelte';

  const projectMetricsResponse: ProjectsResponse = await getProjects();
</script>
<script>
</script>

<div class="projects">
  <h1>{t('projects.title')}</h1>
  <p>{t('projects.description')}</p>

  <GlobalPerformanceLineChart {projectMetricsResponse}/>
</div>
