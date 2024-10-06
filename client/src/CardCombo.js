const CardCombo = () => {
    // Aqui você pode definir combos de cartas ou recuperar via API
    const combos = ["Carta 1 + Carta 2", "Carta 3 + Carta 4", "Carta 5 + Carta 6"];
  
    return (
      <div>
        <h2>Combo de Cartas</h2>
        <ul>
          {combos.map((combo, index) => (
            <li key={index}>{combo}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CardCombo;