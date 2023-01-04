import { useState, useEffect } from 'react';

import { authenticationApi } from '../../../services/api/authenticationAPI';

import { PostProps } from '../components/elements/cards/Post';

export const usePosts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { posts },
        } = await authenticationApi.getPosts();

        setPosts(posts);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return {
    posts,
    isLoading,
  };
};
