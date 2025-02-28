export const Card = ({ id, name, capital, region, population, flag }) => {
    return (
      <div className="card">
        <h3>{name} (#{id + 1})</h3>
        <p><strong>Capital:</strong> {capital}</p>
        <p><strong>Región:</strong> {region}</p>
        <p><strong>Población:</strong> {population.toLocaleString()}</p>
        {flag && <img src={flag} alt={`Bandera de ${name}`} width="150px" />}
      </div>
    );
  };
  