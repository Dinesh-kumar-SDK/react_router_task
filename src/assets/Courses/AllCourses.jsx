const AllCourses = () => {
    return (
        <div>
            <h2>All Courses</h2>
            <div style={styles.cardContainer}>
                <CourseCard title="Python Objects 101" description="How to work with Python objects." />
                <CourseCard title="Machine Learning Must-Know" description="Essentials of ML for beginners." />
                <CourseCard title="Unlocking NLP Power" description="Dive into Natural Language Processing." />
            </div>
        </div>
    );
};

// A reusable card component for courses
// eslint-disable-next-line react/prop-types
const CourseCard = ({ title, description }) => (
    <div style={styles.card}>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const styles = {
    cardContainer: {
        display: "flex",
        gap: "20px",
    },
    card: {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        width: "250px",
        textAlign: "center",
    },
};

export default AllCourses;