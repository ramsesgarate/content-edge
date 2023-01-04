import { useAsyncData } from "#app";
import { queryContent } from "#imports";

export const usePostList = () => {
  return useAsyncData('content:post-partials', () => queryContent('/blog')
    .only(['title','description', '_path'])
    .find()
    )
}
export const useViews = async (slug: string) => {
  const { data: views } = await useFetch(`/api/views/${slug}`, { 
    method: "POST",
  });

  return views
};

