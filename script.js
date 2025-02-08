document.getElementById("search-button").addEventListener("click", async () => {
    const searchInput = document.getElementById("search-input");
    const query = searchInput.value.trim();
  
    // Clear previous data
    clearData();
  
    // Step 14: If the input is "Red", show an alert
    if (query === "Red") {
      alert("Pokémon not found");
      return;
    }
  
    try {
      // Use the freeCodeCamp PokéAPI Proxy (here we use the standard PokéAPI)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      
      if (!response.ok) {
        throw new Error("Pokémon not found");
      }
      
      const data = await response.json();
  
      // Populate Pokémon details
  
      // Name in uppercase
      document.getElementById("pokemon-name").textContent = data.name.toUpperCase();
  
      // Pokémon id. You can choose to include a "#" or not.
      document.getElementById("pokemon-id").textContent = "#" + data.id;
  
      // Weight and height with labels (if you prefer just the number, you can remove the labels)
      document.getElementById("weight").textContent = "Weight: " + data.weight;
      document.getElementById("height").textContent = "Height: " + data.height;
  
      // Stats (hp, attack, defense, special-attack, special-defense, speed)
      data.stats.forEach((stat) => {
        switch (stat.stat.name) {
          case "hp":
            document.getElementById("hp").textContent = stat.base_stat;
            break;
          case "attack":
            document.getElementById("attack").textContent = stat.base_stat;
            break;
          case "defense":
            document.getElementById("defense").textContent = stat.base_stat;
            break;
          case "special-attack":
            document.getElementById("special-attack").textContent = stat.base_stat;
            break;
          case "special-defense":
            document.getElementById("special-defense").textContent = stat.base_stat;
            break;
          case "speed":
            document.getElementById("speed").textContent = stat.base_stat;
            break;
        }
      });
  
      // Clear the types element first (Step 17 & 20)
      const typesContainer = document.getElementById("types");
      typesContainer.innerHTML = "";
      // Add one or more type elements based on the Pokémon's types
      data.types.forEach((typeInfo) => {
        const typeSpan = document.createElement("span");
        typeSpan.textContent = typeInfo.type.name.toUpperCase();
        typesContainer.appendChild(typeSpan);
      });
  
      // Add the sprite image (Step 16 & 19)
      // First remove any existing sprite if present
      const existingSprite = document.getElementById("sprite");
      if (existingSprite) {
        existingSprite.remove();
      }
      const spriteContainer = document.getElementById("sprite-container");
      const spriteImg = document.createElement("img");
      spriteImg.id = "sprite";
      spriteImg.src = data.sprites.front_default;
      spriteImg.alt = data.name + " sprite";
      spriteContainer.appendChild(spriteImg);
    } catch (error) {
      // For any errors (e.g., Pokémon not found), show an alert
      alert("Pokémon not found");
    }
  });
  
  // Helper function to clear previous search data
  function clearData() {
    document.getElementById("pokemon-name").textContent = "";
    document.getElementById("pokemon-id").textContent = "";
    document.getElementById("weight").textContent = "";
    document.getElementById("height").textContent = "";
    document.getElementById("hp").textContent = "";
    document.getElementById("attack").textContent = "";
    document.getElementById("defense").textContent = "";
    document.getElementById("special-attack").textContent = "";
    document.getElementById("special-defense").textContent = "";
    document.getElementById("speed").textContent = "";
    document.getElementById("types").innerHTML = "";
  
    // Remove existing sprite image if it exists
    const existingSprite = document.getElementById("sprite");
    if (existingSprite) {
      existingSprite.remove();
    }
  }
  