import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skill.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((index, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(index.imageSrc)} alt={index.title} />
                </div>
                <p>{index.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((index, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(index.imageSrc)}
                  alt={`${index.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${index.role}, ${index.organisation}`}</h3>
                  <p>{`${index.startDate}, ${index.endDate}`}</p>
                  <ul>
                    {index.experiences.map((item, id) => {
                      return <li key={id}>{item}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
