function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("Parameter is not a number!");
  }
}

try {
  getRectArea(3, "A");
} catch (e) {
  console.error(e);
}

/*---------BREAK-----------*/

function UserException(message) {
  this.message = message;
  this.name = "UserException";
}

function getMonthName(mo) {
  mo--; // * Adjust month number for array index (1 = Jan, 12 = Dec)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo] !== undefined) {
    return months[mo];
  } else {
    throw new UserException("InvalidMonthNo");
  }
}

let monthName;

try {
  // statements to try
  const myMonth = 15; // 15 is out of bound to raise the exception
  monthName = getMonthName(myMonth);
} catch (e) {
  monthName = "unknown";
  console.error(e.message, e.name); // pass exception object to err handler
}
