import $ from "jquery";


const paragraphs = [
    "<p>This is the first paragraph.</p>",
    "<p>This is the second paragraph.</p>",
    "<p>This is the third paragraph.</p>"
];

// Append each paragraph to the container
paragraphs.forEach(paragraph => {
    $("body").append(paragraph);
});
