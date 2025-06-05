import React from "react";
import styles from "./BKIntroSection.module.css";

const BKIntroSection = () => {
  return (
    <section className={styles.container}>
      <img
        className={styles.avatar}
        src="https://i.pravatar.cc/160?img=65"
        alt="بهروز کریمی"
      />
      <h2 className={styles.title}>بهروز کریمی</h2>
      <p className={styles.description}>
        مدرس و مشاور تخصصی در حوزه برندینگ، بازاریابی و توسعه فردی. با رویکردی
        عمیق و کاربردی، مسیر روشن کسب‌وکار را برای افراد و سازمان‌ها طراحی
        می‌کند. تجربه‌ی بیش از ده سال فعالیت در فضای آموزش، کوچینگ و
        مشاوره، از او شخصیتی ساخته که نه فقط آموزش می‌دهد، بلکه میراثی روشن
        خلق می‌کند.
      </p>
    </section>
  );
};

export default BKIntroSection;
