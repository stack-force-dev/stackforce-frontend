import classNames from "classnames";
import React, { useState } from "react";

import Companies from "./Companies";
import styles from "./styles.m.scss";

const data = [
  {
    title: "Backend и DevOps",
    items: ["Python", "Node.js", "PostgreSQL", "Docker", "Nginx", "CI/CD", "Git"],
  },
  {
    title: "Разработка клиентских систем",
    items: ["TypeScript", "React", "Redux", "Jest", "Sass", "RestAPI"],
  },
  {
    title: "Управление проектами",
    items: ["Waterfall", "Agile", "Scrum", "Kanban", "Notion"],
  },
  {
    title: "Аналитика и проектирование",
    items: ["Figma", "Adobe CC", "Customer Journey Map", "UX-аудит", "Google Analytics", "Яндекс.Метрика"],
  },
];

const Stack = () => {
  const [activeStack, setActiveStack] = useState<number | null>(null);

  return (
    <section className={styles.stack} id="section-4">
      <div className="container">
        <div className={styles.technologies}>
          <h3>Наши технологии</h3>
          <div className={styles.technologiesContent}>
            {data.map((stack, index) => (
              <div
                key={stack.title}
                className={classNames(styles.stack, { [styles.activeStack]: activeStack === index })}
              >
                <div
                  className={styles.stackHeader}
                  onClick={() => setActiveStack(index === activeStack ? null : index)}
                >
                  <div className={styles.stackTitle}>{stack.title}</div>
                  <div className={styles.plus} />
                </div>

                <div className={styles.stackItems}>
                  {stack.items.map((item) => (
                    <div className={styles.stackItem} key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.projects}>
          <h3>Наши специалисты работали над следующими проектами</h3>
          <Companies />
        </div>
      </div>
    </section>
  );
};

export default Stack;
