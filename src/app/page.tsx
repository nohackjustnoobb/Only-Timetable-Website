import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.glowWrapper}>
          <Image
            src={`${process.env.BASE_PATH}/img/icon.png`}
            alt="Only Timetable logo"
            width={144}
            height={144}
            priority
          />
        </div>
        <h1 className={styles.heroTitle}>Only Timetable</h1>
        <div className={styles.heroSubtitle}>
          The ONLY app you need for bus and public transport timetables.
          <br />
          Minimal, plugin-based, and distraction-free.
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Plugin-based & Extensible</h2>
        <div className={styles.sectionDesc}>
          Easily add support for your local transport provider or region by
          installing a plugin. All timetable data is provided by plugins.
        </div>
        <div className={styles.imgRow}>
          <Image
            src={`${process.env.BASE_PATH}/img/marketplace.png`}
            alt="Marketplace"
            width={200}
            height={200}
          />
          <Image
            src={`${process.env.BASE_PATH}/img/add_plugin.png`}
            alt="Add Plugin"
            width={200}
            height={200}
          />
          <Image
            src={`${process.env.BASE_PATH}/img/plugin.png`}
            alt="Plugin"
            width={200}
            height={200}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Modern, Customizable UI</h2>
        <div className={styles.sectionDesc}>
          Enjoy a beautiful, modern interface that adapts to your device&apos;s
          theme. Personalize your experience with your favorite theme color.
        </div>
        <div className={styles.imgRow}>
          <Image
            src={`${process.env.BASE_PATH}/img/light_theme.png`}
            alt="Light Theme"
            width={200}
            height={200}
          />
          <Image
            src={`${process.env.BASE_PATH}/img/dark_theme.png`}
            alt="Dark Theme"
            width={200}
            height={200}
          />
          <Image
            src={`${process.env.BASE_PATH}/img/theme_color.png`}
            alt="Theme Color"
            width={200}
            height={200}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Multilanguage & Easy to Use</h2>
        <div className={styles.sectionDesc}>
          Use the app in your preferred language. The intuitive design makes it
          easy for anyone to get started.
        </div>
        <div className={styles.imgRow}>
          <Image
            src={`${process.env.BASE_PATH}/img/multilanguage.png`}
            alt="Multilanguage"
            width={200}
            height={200}
          />
          <Image
            src={`${process.env.BASE_PATH}/img/search.png`}
            alt="Search"
            width={200}
            height={200}
          />
          <Image
            src={`${process.env.BASE_PATH}/img/route.png`}
            alt="Route"
            width={200}
            height={200}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Plugin Marketplace</h2>
        <div className={styles.sectionDesc}>
          Discover and install plugins from the marketplace to enhance your app
          experience. Find plugins for various regions and transport providers.
        </div>
        <Link href="/plugins" className={styles.singleImgRow}>
          <Image
            src={`${process.env.BASE_PATH}/img/plugin_marketplace.png`}
            alt="Plugin Marketplace"
            width={200}
            height={200}
          />
        </Link>
        <Link href="/plugins" className={"filledButton"}>
          Visit Plugin Marketplace
        </Link>
      </section>

      <section className={styles.download}>
        <h2 className={styles.sectionTitle}>Download</h2>
        <div className={styles.downloadGrid}>
          <div className={styles.downloadCol}>
            <b>Android</b>
            <a
              href="https://github.com/nohackjustnoobb/Only-Timetable/releases/latest/download/app-release.aab"
              target="_blank"
              rel="noopener noreferrer"
              className="outlinedButton"
            >
              AAB (Google Play format)
            </a>
            <a
              href="https://github.com/nohackjustnoobb/Only-Timetable/releases/latest/download/app-release.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="outlinedButton"
            >
              APK (Direct install)
            </a>
          </div>
          <div className={styles.downloadCol}>
            <b>iOS</b>
            <a
              href="https://github.com/nohackjustnoobb/Only-Timetable/releases/latest/download/app-release.ipa"
              target="_blank"
              rel="noopener noreferrer"
              className="outlinedButton"
            >
              IPA (Sideload only, not tested)
            </a>
          </div>
        </div>
        <div>
          For all downloads, visit the{" "}
          <a
            href="https://github.com/nohackjustnoobb/Only-Timetable/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            Releases Page
          </a>
          .
        </div>
      </section>
    </main>
  );
}
