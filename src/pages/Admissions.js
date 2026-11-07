const timeline = [
  'Understanding Admission requirements',
  'Submit application online',
  'Upload supporting documents',
  'Make application fee payment',
  'Check application status',
];

function Admissions() {
  return (
    <main className="admissions">
      <h1>Admission</h1>
      <h2>Admission Timeline</h2>
      <ul className="admission-timeline">
        {timeline.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ul>
    </main>
  );
}

export default Admissions;
