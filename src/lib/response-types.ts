/**
 * User
 */
export type User = {
  token: string,
}

/**
 * Projects
 */

export type ProjectMetrics = {
  mean: number,
  average: number,
  stdev: number,
}

export type ProjectResponse = {
  [endpoint: string]: {
    [date: string]: ProjectMetrics
  }[]
}

export type ProjectsResponse = {
  [projectKey: string]: {
    [date: string]: ProjectMetrics
  }[]
}

/**
 * Routes
 */
export type RouteResponse = {
  [date: string]: {
    errors: number,
    msgs: { [msg: string]: number },
    count: number,
    stdv100: number,
    stdv80: number,
    avg100: number,
    median100: number,
    min100: number,
    max100: number,
    avg80: number,
    median80: number,
    min80: number,
    max80: number
  }[]
}
