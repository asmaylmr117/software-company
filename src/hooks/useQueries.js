import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api/axiosConfig';

export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data } = await apiClient.get('/blogs');
      // In case the API wraps the response in a 'data' object
      return data.data ? data.data : data;
    },
  });
};

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data } = await apiClient.get('/projects');
      return data.data ? data.data : data;
    },
  });
};

export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const { data } = await apiClient.get('/services');
      return data.data ? data.data : data;
    },
  });
};

export const useTeams = () => {
  return useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const { data } = await apiClient.get('/teams');
      return data.data ? data.data : data;
    },
  });
};
