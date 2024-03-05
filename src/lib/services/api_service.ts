const BASE_URL = 'http://localhost:3000';

async function fetchHomePage(): Promise<string | null> {
  try {
    const response = await fetch(`${BASE_URL}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error fetching home page:', error);
    return null;
  }
}

// You can add more API methods here

export default {
  fetchHomePage,
};
