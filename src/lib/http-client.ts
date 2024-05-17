import { user } from "../stores";
import { LOCAL_STORAGE_USER_KEY } from "./constants";
import type { ProjectResponse, ProjectsResponse, RouteResponse, User } from "./response-types";

/**
 * Generic fetch function
 */
type FetcherOptions = {
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: any,
  headers?: HeadersInit,
}
export const fetcher = async <T>(url: string, options?: FetcherOptions): Promise<T> => {
  const headers = new Headers(options?.headers);
  if (localStorage.getItem(LOCAL_STORAGE_USER_KEY)) {
    const token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY) || "{}")?.token;
    headers.set("Authorization", `Bearer ${ token }`);
  }
  const response = await fetch(
    `${ import.meta.env.VITE_BACKEND_URL }/${ url }`,
    {
      ...options,
      headers,
    }
  );
  if (! response.ok) {
    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}

export const login = async (username: string): Promise<void> => {
  const response = await fetcher<User>('login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  });
  const _user = {
    token: response.token,
  }
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(_user));
  user.set(_user);
}

export const logout = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  user.set(null);
}

/**
 * Projects+Routes
 */

export const getProjects = async (): Promise<ProjectsResponse> => {
  return await fetcher<ProjectsResponse>("projects");
}

export const getProject = async (projectKey: string): Promise<ProjectResponse> => {
  return await fetcher<ProjectResponse>(`project/${ projectKey }/routes`);
}

export const getRoute = async (projectKey: string, route: string): Promise<RouteResponse> => {
  return await fetcher<RouteResponse>(`project/${ projectKey }/route/${ route }`);
}
