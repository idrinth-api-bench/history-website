<script async lang="ts" context="module">
  import t from "../lib/t";
  import { getProject } from '../lib/http-client.js';
  import type { ProjectResponse } from '../lib/response-types';
  import ProjectPerformanceLineChart from '../components/ProjectPerformanceLineChart.svelte';
  export let project: string;
  const projectMetricsResponse: ProjectResponse = await getProject(project);
</script>
<script>
</script>

<div class="project">
  <h1>{t('project.title')}: {project}</h1>
  <p>{t('project.description')}</p>

  <ProjectPerformanceLineChart {projectMetricsResponse}/>
</div>
