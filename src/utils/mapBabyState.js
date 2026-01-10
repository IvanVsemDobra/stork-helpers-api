export const mapBabyState = (data) => {
  const babyData = {
    weekNumber: data.weekNumber,
    image: data.image,
    imageAlt: data.imageAlt,
    babyActivity: data.babyActivity,
    babyDevelopment: data.babyDevelopment,
  };
  return babyData;
};
