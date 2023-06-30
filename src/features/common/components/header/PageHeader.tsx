import Image from 'next/image';
import JiaryLogo from '@/static/jiary-logo.svg';
import GithubLogo from '@/static/github-logo.svg';
import UserProfile from '@/features/common/components/profile/UserProfile';
import * as style from '@/features/common/components/header/PageHeader.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from '@/store/slices/authSlice.ts';

export default function PageHeader() {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <div className={style.sideDiv}>
            <li className="jiary-logo">
              <Link href="/" className={style.imageLogoWrapper}>
                <Image
                  src={JiaryLogo}
                  width={30}
                  height={30}
                  alt="jiary-logo"
                />
              </Link>
            </li>
            <li className={style.li}>
              <Link href="/diary" className={style.a}>
                Diary
              </Link>
            </li>
          </div>

          <div className={style.sideDiv}>
            <li className={style.li}>
              <Link
                href="https://github.com/f-lab-edu/jiary"
                target="_blank"
                className={style.a}
              >
                <Image
                  src={GithubLogo}
                  width={30}
                  height={30}
                  alt="github-logo"
                />
              </Link>
            </li>

            {isLoggedIn ? (
              <li className={style.li}>
                <UserProfile />
              </li>
            ) : (
              <li className={style.li}>
                <Link href="/auth" className={style.a}>
                  로그인
                </Link>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
}