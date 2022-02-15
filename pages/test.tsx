import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Header from "../component/header";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

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
