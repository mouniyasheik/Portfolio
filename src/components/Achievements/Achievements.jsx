import React from "react";
import styles from "./Achievements.module.css";

export const Achievements = () => {
  return (
    <section className={styles.achievementsSection} id="achievements">
      <h2 className={styles.sectionTitle}>Achievements & Certifications</h2>

      {/* Coding Profiles */}
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>💻 Coding Profiles</h3>

        <div className={styles.profileItem}>
          <div className={styles.lineItem}>
            <span>
              <strong>LeetCode:</strong> Solved 200+ problems.
            </span>
            <a
              href="https://leetcode.com/u/Mouniya_1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Profile
            </a>
          </div>
        </div>

        <div className={styles.profileItem}>
          <div className={styles.lineItem}>
            <span>
              <strong>CodeChef:</strong> Practicing problems to enhance coding skills.
            </span>
            <a
              href="https://www.codechef.com/users/mouniya_1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Profile
            </a>
          </div>
        </div>

        <div className={styles.profileItem}>
          <div className={styles.lineItem}>
            <span>
              <strong>GeeksforGeeks:</strong> Solved 100+ problems.
            </span>
            <a
              href="https://www.geeksforgeeks.org/user/22p31a11k3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Profile
            </a>
          </div>
        </div>
        <div className={styles.profileItem}>
          <div className={styles.lineItem}>
            <span>
              <strong>HackerRank:</strong> 5★ in Python, 4★
              in C, 3★ in Problem Solving, C++
            </span>
            <a
              href="https://www.hackerrank.com/profile/22P31A0534"
              target="_blank"
              rel="noopener noreferrer"
            >
               Profile
            </a>
          </div>
        </div>
      </div>

      {/* Certifications */}
      {/* Certifications */}
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>🎓 Certifications</h3>

        <div className={styles.profileItem}>
          <div className={styles.lineItem}>
            <span className={styles.leftText}>
              <a
                href="https://drive.google.com/file/d/1GygYnA59Xcffw5Z9Wn2Vkevj2ns_HH1I/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                IT Specialist in Python
              </a>
            </span>
            <span className={styles.rightText}>Certiport</span>
          </div>
        </div>

        <div className={styles.profileItem}>
          <div className={styles.lineItem}>
            <span className={styles.leftText}>
              <a
                href="https://drive.google.com/file/d/1LnZqHzyMifO2c7SDzQCOAU3c5jQFCrjR/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cisco Certified in C Programming
              </a>
            </span>
            <span className={styles.rightText}>Cisco</span>
          </div>
        </div>

        <div className={styles.profileItem}>
          <div className={styles.lineItem}>
            <span className={styles.leftText}>
              <a
                href="https://drive.google.com/file/d/1Z7Y3fwu0jDtu0tz0tek-QswrrWE0rBpD/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                IT Specialist in HTML & CSS
              </a>
            </span>
            <span className={styles.rightText}>Certiport</span>
          </div>
        </div>
      </div>
    </section>
  );
};
