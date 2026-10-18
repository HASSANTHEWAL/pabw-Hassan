// api.js = the DATA layer. Only this file talks to the network.

// the address, written once at the top (https, no key)
const URL = "https://api.spaceflightnewsapi.net/v4/articles/?limit=6";

// gets the news and gives back the array of articles
export async function fetchNews() {
  try {
    const response = await fetch(URL);
    console.log("status", response.status, "ok", response.ok);

    // fetch does not throw on 404 or 500, so check it myself
    if (!response.ok) throw new Error("status " + response.status);

    const data = await response.json(); // text -> object
    return data.results; // the array is inside "results"
  } catch (error) {
    console.error("failed to load", error.message);
    throw error; // let app.js show it on the page
  }
}
