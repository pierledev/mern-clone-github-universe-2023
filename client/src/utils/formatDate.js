const formatDate = (dateString) => {
  const options = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  };
  const date = new Date(dateString);

  return date.toLocaleDateString('en-US', options);
};

export default formatDate;
