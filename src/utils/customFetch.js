const customFetch = (data, stallTime = 2000) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      try {
        if (data) {
          resolve(data);
        }
      } catch (err) {
        reject(err);
      }
    }, stallTime)
  );
};

export default customFetch;
