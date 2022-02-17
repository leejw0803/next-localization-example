export const getLocale = (locale: string = "ko") => {
  return locale.split("-")[0];
};
