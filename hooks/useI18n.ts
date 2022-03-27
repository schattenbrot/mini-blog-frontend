import english from "../i18n/english";
import german from "../i18n/german";

const useI18n = (locale: string | undefined, page: string) => {
  const pageSplit = page.split("/");
  if (pageSplit.length > 2) {
    switch (pageSplit[1]) {
      case "blog": {
        console.log("blog case triggered");
        if (pageSplit[2] !== "create") page = "postDetails";
        break;
      }
      case "users": {
        page = "userDetails";
        if (pageSplit[3] && pageSplit[3] === "edit") page = "editUser";
      }
    }
  }

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
