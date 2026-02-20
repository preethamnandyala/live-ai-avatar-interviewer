// apps/web/src/services/api.ts
// ------------------------------------------------------------
// API CLIENT (Adapter / Gateway Layer)
//
// Why this file exists:
// - We do NOT want React components calling `fetch()` everywhere.
// - Instead, components call functions from this file.
// - This keeps all API URLs + error handling in ONE place.
//
// Benefit later:
// - When you deploy to cloud, your base URL might change.
// - You update it here once, not in 20 components.
// ------------------------------------------------------------

/**
 * Calls the backend health endpoint.
 *
 * What is "healthz"?
 * - A simple backend route used to check if the server is alive.
 * - Usually returns JSON like: { status: "ok" }
 *
 * What this function returns:
 * - The JSON response from the backend.
 *
 * What happens if backend is down / returns an error:
 * - We throw an Error so the UI can show a message.
 */
export async function getHealth() {
  // 1) Send a network request to the backend endpoint
  const res = await fetch("http://localhost:8000/healthz");

  // 2) If the HTTP status code is NOT 200-299, treat it as failure
  // Example failures: 404, 500, 503, etc.
  if (!res.ok) {
    throw new Error("Health check failed");
  }

  // 3) Convert response body into JSON (JavaScript object) and return it
  return res.json();
}