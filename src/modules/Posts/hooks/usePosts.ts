import { useState, useEffect } from 'react';

import { authenticationApi } from '@services/api/authenticationAPI';

import { PostProps } from '../components/elements/cards/Post';

export const usePosts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostProps[]>([]);

  const handlePosts = async () => {
    try {
      const { data } = await authenticationApi.getPosts();

      setPosts(data.posts);
      setIsLoading(false);
    } catch {
      //
    }
  };

  useEffect(() => {
    handlePosts();
  }, []);

  return {
    posts,
    isLoading,
  };
};
