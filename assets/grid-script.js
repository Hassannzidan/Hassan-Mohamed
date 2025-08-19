// =============================================
// Global State
// =============================================
let currentProduct = null;

// =============================================
// Utility Functions
// =============================================
/**
 * Fetch JSON data safely
 * @param {string} url - The URL to fetch data from
 * @return {Promise<any>} - The JSON data
 */
async function fetchJson(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(`Failed to fetch JSON data: ${url}`, error);
    throw error;
  }
}
/**
 * Close modal safely
 */
function closeModal() {
  const modal = document.getElementById("myModal");
  if (modal) modal.style.display = "none";
}
/**
 * Open modal safely
 */

function openModal() {
  const modal = document.getElementById("myModal");
  if (modal) modal.style.display = "block";
}

// =============================================
// Modal : Render Product Data
// =============================================
function renderProductModal(product) {
  // Cache DOM references
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");
  const modalDescription = document.getElementById("modalDescription");
  const modalImage = document.getElementById("modalImage");
  const colorContainer = document.getElementById("colorContainer");
  const sizeDropdownList = document.getElementById("sizeDropdownList");

  // Fill basic product information
  modalTitle.textContent = product.title;
  modalPrice.textContent = (product.price / 100).toFixed(2) + "€";
  modalDescription.innerHTML = product.description;
  modalImage.src = product.image[0] || "";

  // -----------------------------------------
  // Colors Section
  // -----------------------------------------
  colorContainer.innerHTML = ""; // Clear previous colors
  const colorOption = product.options.find(
    (opt) => opt.name.toLowerCase() === "color"
  );

  if (colorOption) {
    colorContainer.style.setProperty("--count", colorOption.values.length);

    // Add color indicator
    const indicator = document.createElement("div");
    indicator.className = "color-indicator";
    colorContainer.appendChild(indicator);

    colorOption.values.forEach((color, i) => {
      const colorBtn = document.createElement("button");
      colorBtn.textContent = color;
      colorBtn.className = "color-btn";
      colorBtn.style.setProperty("--color", color.toLowerCase());
    });
  }
}
