export const fetchData = async () => {
  try {
    const response = await fetch("http://django-env.eba-cwpa3c9w.ap-southeast-1.elasticbeanstalk.com");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
