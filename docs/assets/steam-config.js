/* STEAM Project Hub — runtime configuration
 *
 * STEAM_API_BASE : origin of the unified backend (steam-backend, FastAPI).
 *   ""  → same origin (the backend serves this site itself — the target setup
 *         after migration to the dedicated server / custom domain).
 *   While the site is on GitHub Pages, PUBLIC_API below points at the deployed backend origin
 *   (Hugging Face Space https://suenghwan-hwammi.hf.space; later e.g. "https://steam.kaist.ac.kr").
 *   Local dev: a static server on another port falls back to http://127.0.0.1:8000.
 */
(function () {
  if (typeof window.STEAM_API_BASE === "string") return;
  var h = location.hostname, p = location.port;
  var local = (h === "localhost" || h === "127.0.0.1") && p !== "8000";
  // GitHub Pages (static): the backend runs on the Hugging Face Space Suenghwan/hwammi (steam-backend, FastAPI).
  // Move PUBLIC_API to the KAIST server / custom domain once it is allocated.
  var PUBLIC_API = "https://suenghwan-hwammi.hf.space";
  var pages = /\.github\.io$/.test(h);
  window.STEAM_API_BASE = local ? "http://127.0.0.1:8000" : (pages ? PUBLIC_API : "");
})();
