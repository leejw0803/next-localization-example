import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Header from "../component/header";
import { getLocale } from "../utils";

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(getLocale(locale), ["common"])),
    },
  };
};

const Test: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Header translator={t} />
      <div>{t("test")}</div>
    </>
  );
};

export default Test;
