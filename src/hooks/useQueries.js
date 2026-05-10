import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api/axiosConfig';

export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/blogs');

        return Array.isArray(data?.blogs)
          ? data.blogs
          : Array.isArray(data?.data)
          ? data.data
          : Array.isArray(data)
          ? data
          : [];
      } catch (error) {
        console.error('Blogs Error:', error);
        return [];
      }
    },
  });
};

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/projects');

        return Array.isArray(data?.projects)
          ? data.projects
          : Array.isArray(data?.data)
          ? data.data
          : Array.isArray(data)
          ? data
          : [];
      } catch (error) {
        console.error('Projects Error:', error);
        return [];
      }
    },
  });
};

export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/services');

        return Array.isArray(data?.services)
          ? data.services
          : Array.isArray(data?.data)
          ? data.data
          : Array.isArray(data)
          ? data
          : [];
      } catch (error) {
        console.error('Services Error:', error);
        return [];
      }
    },
  });
};

export const useTeams = () => {
  return useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/teams');

        return Array.isArray(data?.teams)
          ? data.teams
          : Array.isArray(data?.data)
          ? data.data
          : Array.isArray(data)
          ? data
          : [];
      } catch (error) {
        console.error('Teams Error:', error);
        return [];
      }
    },
  });
};
