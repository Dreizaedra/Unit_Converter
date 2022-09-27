const convert_data = [
    {
        name: "Length (Meters/Feet)",
        rate: 3.28084,
        metric_unit: "meters",
        imperial_unit: "feet",
        element_id: "length-id"
    },
    {
        name: "Volume (Liters/Gallons)",
        rate: 0.264172,
        metric_unit: "liters",
        imperial_unit: "gallons",
        element_id: "volume-id"
    },
    {
        name: "Mass (Kilograms/Pounds)",
        rate: 2.20462,
        metric_unit: "kilos",
        imperial_unit: "pounds",
        element_id: "mass-id"
    }
];
const user_input = document.getElementById("user-input");
convert_btn();

// On btn press:
function convert_btn() { 
    if (user_input.value > 0) {
        for (let i = 0; i < convert_data.length; i++) {

            // metric variables:
            let metric_value = user_input.value / convert_data[i].rate;
            let metric_fixed = metric_value.toFixed(3);
            let metric_unit = convert_data[i].metric_unit;

            // imperial variables:
            let imperial_value = user_input.value * convert_data[i].rate;
            let imperial_fixed = imperial_value.toFixed(3);
            let imperial_unit = convert_data[i].imperial_unit;

            // getting the correct id and editing HTML:
            let selector = get_element(convert_data[i].element_id);
            selector.innerHTML = `
                <div class="bold purple">${convert_data[i].name}</div>
                ${user_input.value} ${metric_unit} = ${imperial_fixed} ${imperial_unit} | 
                ${user_input.value} ${imperial_unit} = ${metric_fixed} ${metric_unit}
            `;
        }
    // called on page load & if user_input.value is ever "deleted":
    } else {
        user_input.value = 20;
        convert_btn();
    }  
}

// returning correct id
function get_element(element_id) {
    return document.getElementById(element_id);
}
