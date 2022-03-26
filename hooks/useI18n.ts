import english from "../i18n/english";
import german from "../i18n/german";

const useI18n = (locale: string | undefined, page: string) => {
  switch (locale) {
    case "de":
      return getContent(german, page);
    default: {
      return getContent(english, page);
    }
  }
};

const getContent = (content: any, page: string) => {
  return content[page];
};

export default useI18n;
