<script async lang="ts" context="module">
  import GlobalPerformanceLineChart from '../components/GlobalPerformanceLineChart.svelte';
  import { getProjects } from '../lib/http-client.js';
  import type { ProjectsResponse } from '../lib/response-types';
  import t from "../lib/t";

  const projectMetricsResponse: ProjectsResponse = await getProjects();
</script>
<script>
</script>

<div class="projects">
  <h1>{t('projects.title')}</h1>
  <p>{t('projects.description')}</p>

  <ul>
    {#each Object.keys(projectMetricsResponse) as project}
      <li>
        <a href={`/${project}`}>{project}</a>
      </li>
    {/each}
  </ul>

  <GlobalPerformanceLineChart {projectMetricsResponse}/>
</div>
