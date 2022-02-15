import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const Test: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div>{t("test")}</div>
    </>
  );
};

export default Test;
