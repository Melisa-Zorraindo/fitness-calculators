export default function ResultsLiftingCard({ oneRM, weight }) {
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        Estimated 1 RM: <span>{oneRM || 0} </span>
        Kg
      </p>
      <p>
        Recommended to lift: <span>{weight || 0} </span>
        Kg
      </p>
    </div>
  );
}
