const api_url = "https://django-env.eba-cwpa3c9w.ap-southeast-1.elasticbeanstalk.com"
export const fetchData = async () => {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
