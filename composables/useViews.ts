

export default async function useViews(slug: string) {
  const { data: views } = await useFetch(`/api/views/${slug}`, { 
    method: "POST",
  });


  console.log(views.value)
  return views
};
