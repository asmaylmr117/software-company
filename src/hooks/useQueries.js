import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api/axiosConfig';

export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data } = await apiClient.get('/blogs');
      return data.blogs ? data.blogs : (data.data ? data.data : data);
    },
  });
};

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data } = await apiClient.get('/projects');
      return data.projects ? data.projects : (data.data ? data.data : data);
    },
  });
};

export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const { data } = await apiClient.get('/services');
      return data.services ? data.services : (data.data ? data.data : data);
    },
  });
};

export const useTeams = () => {
  return useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const { data } = await apiClient.get('/teams');
      return data.teams ? data.teams : (data.data ? data.data : data);
    },
  });
};
