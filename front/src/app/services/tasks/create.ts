import { httpClient } from "../httpClient";

export interface CreateTaskParams {
  title: string;
  
}

export async function create(params: CreateTaskParams) {
  const { data } = await httpClient.post("/tasks", params);

  return data;
}
