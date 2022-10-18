/*** Object Literals to Pass Optional Arguments ***/ 

function showStatistics(args) {
    document.write("<p><strong>Name:</strong> " + args.name + "<br />");
    document.write("<strong>Team:</strong> " + args.team + "<br />");
    if (typeof args.position === "string") {
        document.write("<strong>Position:</strong> " + args.position + "<br />");
    }
    if (typeof args.average === "number") {
        document.write("<strong>Average:</strong> " + args.average + "<br />");
    }
    if (typeof args.homeruns === "number") {
        document.write("<strong>Home Runs:</strong> " + args.homeruns + "<br />");
    }
    if (typeof args.rbi === "number") {
        document.write("<strong>Runs Batted In:</strong> " + args.rbi + "</p>");
    }
}
showStatistics({ name: "Mark Teixeira" });
showStatistics({ name: "Mark Teixeira", team: "New York Yankees" });
showStatistics({ name: "Mark Teixeira", team: "New York Yankees", position: "1st Base", average: .284, homeruns: 32, rbi: 101 });
