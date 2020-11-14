let calculatorForm = document.forms["calculatorForm"];
console.log(calculatorForm);

console.log(calculatorForm.elements["ventilatorManagmentDirectStart"]);

document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault();

    let $data = $(".form-calculator").serializeArray();

    console.log($data);

    $.ajax({
        url: '/calculator',
        type: 'post',
        data: $data,
        success: function(result) {
          console.log(result)
        }
    });
});