import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.divContainer}>
        <h1 className={styles.hours}>Hours of Operation:</h1>
        <p className={styles.day}>Monday 11:00AM - 9:00PM</p>
        <p>Tuesday 11:00AM - 9:00PM</p>
        <p>Wednesday 11:00AM - 9:00PM</p>
        <p>Thursday 11:00AM - 9:00PM</p>
        <p>Friday 11:00AM - 9:30PM</p>
        <p>Saturday 11:00AM - 9:30PM</p>
        <p>Sunday 11:00AM - 9:00PM</p>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12696.149148790306!2d-76.7257842!3d37.2942501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b0891b52203b49%3A0x9269f0aaafb856ee!2sRamen%20Time!5e0!3m2!1sen!2sus!4v1709615922756!5m2!1sen!2sus"
          height= "75%"
          width="auto"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
