function onButton(e) {
  let btn = e.target || e.srcElement;
  let action = document.getElementById(btn.id).innerHTML;
  let res = document.getElementById("res");
  switch (action) {
    case "0":
    case "1":
    case "-":
    case "+":
    case "*":
    case "/":
      res.innerHTML += action;
      break;
    case "C":
      res.innerHTML = "";
      break;
    case "=":
      let exp = res.innerHTML;
      let nums = /(\d+)/g;

      exp = exp.replace(nums, function (match) {
        return parseInt(match, 2);
      });
      res.innerHTML = eval(exp).toString(2);
      break;
    default:
      console.error("should not be excuted");
      break;
  }
}

let buttons = document.getElementsByTagName("button");
for (let button of buttons) {
  button.onclick = onButton;
}

let btn = onclick;
let action = document.getElementById(btn.id).innerHTML;

console.log(action);
