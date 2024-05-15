document.write("<table border='1' style='border-collapse: collapse;'>");

let counter = 1;

for (let i = 0; i < 10; i++) {
    document.write("<tr>");

    for (let j = 0; j < 10; j++) {
        document.write("<td style='width: 50px; height: 50px;'>" + counter + "</td>");
        counter++;
    }

    document.write("</tr>");
}

document.write("</table>");
