import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { Loading } from './Loading';
import { Card } from './Card';

export const CustomHook = () => {
  // Counter for selecting a country (starting at 0)
  const { counter, decrement, increment } = useCounter(0);

  // Fetch all countries from API
  const { data: countries, hasError, isLoading } = useFetch('https://restcountries.com/v3.1/all');

  // Ensure countries exist before accessing a specific one
  const country = countries && countries.length > 0 ? countries[counter] : null;

  return (
    <div>
      <h1>Información de Países</h1>
      <hr />

      {isLoading ? (
        <Loading message="Cargando información del país..." />
      ) : hasError ? (
        <p>Error al cargar datos.</p>
      ) : (
        country && (
          <>
            <Card 
              id={counter}
              name={country.name.common} 
              capital={country.capital?.[0] || "No disponible"}
              region={country.region}
              population={country.population}
              flag={country.flags?.png || country.flags?.svg}
            />
          </>
        )
      )}

      {/* Navigation Buttons */}
      <button 
        className='btn btn-primary' 
        onClick={() => decrement()} 
        disabled={counter <= 0}  // Prevents negative index
      >
        Anterior
      </button>
      
      <button 
        className='btn btn-primary' 
        onClick={() => increment()} 
        disabled={countries && counter >= countries.length - 1}  // Prevents exceeding array length
      >
        Siguiente
      </button>
    </div>
  );
};
