const notes = [
  {
    title: "Arrays are containers",
    category: "array",
    text: "Arrays let you store multiple values in one place, which makes it easier to loop through related data and build flexible programs.",
  },
  {
    title: "Strings can be searched",
    category: "string",
    text: "The includes() method checks whether a word or phrase exists inside another string and returns true or false.",
  },
  {
    title: "Slice makes previews easy",
    category: "string",
    text: "The slice() method can copy part of a string, which is useful when you only want to show the first few characters of a longer sentence.",
  },
  {
    title: "Loops repeat actions",
    category: "loop",
    text: "Loops help you repeat code without rewriting it, especially when you need to visit every item inside an array.",
  },
  {
    title: "Functions keep code organized",
    category: "function",
    text: "Functions group reusable logic together so your code is easier to read, test, and update as your project grows.",
  },
];

const searchInput = document.querySelector("#search");
const notesList = document.querySelector("#notes-list");
const resultCount = document.querySelector("#result-count");
const originalOutput = document.querySelector("#original-output");
const trimOutput = document.querySelector("#trim-output");
const lowerOutput = document.querySelector("#lower-output");
const upperOutput = document.querySelector("#upper-output");

function getPreview(text) {
  return `${text.slice(0, 80)}...`;
}

function displayNotes(notesToShow) {
  resultCount.textContent = `${notesToShow.length} note(s) found`;

  if (notesToShow.length === 0) {
    notesList.innerHTML = `
      <div class="empty">
        No notes matched your search yet. Try a word like "string" or "loop".
      </div>
    `;
    return;
  }

  notesList.innerHTML = notesToShow
    .map(
      (note) => `
        <article class="note-card">
          <h2>${note.title}</h2>
          <span class="tag">${note.category}</span>
          <p>${getPreview(note.text)}</p>
        </article>
      `
    )
    .join("");
}

function updateStringMethodPreview(value) {
  const trimmedValue = value.trim();

  originalOutput.textContent = value || "Nothing typed yet.";
  trimOutput.textContent = trimmedValue || "Nothing typed yet.";
  lowerOutput.textContent = trimmedValue.toLowerCase() || "Nothing typed yet.";
  upperOutput.textContent = trimmedValue.toUpperCase() || "Nothing typed yet.";
}

function handleSearch() {
  const rawValue = searchInput.value;
  const searchValue = rawValue.trim().toLowerCase();

  updateStringMethodPreview(rawValue);

  const filteredNotes = notes.filter((note) => {
    const title = note.title.toLowerCase();
    const category = note.category.toLowerCase();
    const text = note.text.toLowerCase();

    return (
      title.includes(searchValue) ||
      category.includes(searchValue) ||
      text.includes(searchValue)
    );
  });

  displayNotes(filteredNotes);
}

searchInput.addEventListener("input", handleSearch);

updateStringMethodPreview("");
displayNotes(notes);
