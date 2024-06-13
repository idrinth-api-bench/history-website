<script async lang="ts">
  import ProjectPerformanceLineChart from '../components/ProjectPerformanceLineChart.svelte';
  import { getProject } from '../lib/http-client.js';
  import type { ProjectResponse } from '../lib/response-types';
  import t from "../lib/t";
  
  export let project: string;

  let projectMetricsResponse: ProjectResponse;
  (async () => {
    projectMetricsResponse = await getProject(project);
  })();
</script>

<div class="project">
  <h1>{t('project.title')}: {project}</h1>
  <p>{t('project.description')}</p>

  <h2>{t('project.routes')}</h2>
  <ul>
    {#if projectMetricsResponse}
      {#each Object.keys(projectMetricsResponse) as route}
        <li>
          <a href={`/${project}/${route}`}>{route}</a>
        </li>
      {/each}
    {/if}
  </ul>

  {#if projectMetricsResponse}
    <ProjectPerformanceLineChart {projectMetricsResponse}/>
  {/if}
</div>
