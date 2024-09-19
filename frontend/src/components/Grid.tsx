import Student from "./Student";

const students = [
    { id: "1", name: "Ola Normann" },
    { id: "2", name: "Kari Normann" },
];

export default function Grid() {
    return (
        <article className="grid">
            {students.map((student) => (
                <Student key={student.id} name={student.name} id={student.id} />
            ))}
        </article>
    );
}
