import { TFunction } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type HeaderProps = {
  translator: TFunction;
};

function Header({ translator }: HeaderProps): JSX.Element {
  const router = useRouter();

  return (
    <div>
      <Link href={router.pathname} locale="en" passHref>
        <button>{translator("header.locale.en")}</button>
      </Link>
      <Link href={router.pathname} locale="ko" passHref>
        <button>{translator("header.locale.ko")}</button>
      </Link>
    </div>
  );
}

export default Header;
