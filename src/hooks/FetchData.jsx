function FetchData(url, options,error) {
  return async () => {
    const data = await fetch(url, options);
    const res = await data.json();
    return res
  };
}

export { FetchData };
