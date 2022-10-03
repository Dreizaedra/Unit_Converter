// Creating the array through class:
class Convertion {
    constructor(name, rate, metric_unit, imperial_unit, element_id) {
        this.name = name;
        this.rate = rate;
        this.metric_unit = metric_unit;
        this.imperial_unit = imperial_unit;
        this.element_id = element_id;
    };
};

const convert_data = [
    new Convertion("Length (Meters/Feet)", 3.28084, "meters", "feet", "length-id"),
    new Convertion("Volume (Liters/Gallons)", 0.264172, "liters", "Gallons", "volume-id"),
    new Convertion("Mass (Kilograms/Pounds)", 2.20462, "kilos", "pounds", "mass-id")
];

const user_input = document.getElementById("user-input");
convert_btn();

// On btn press:
function convert_btn() { 
    if (user_input.value > 0) {
        for (let i in convert_data) {

            // metric variables:
            let metric_value = user_input.value / convert_data[i].rate;
            let metric_fixed = metric_value.toFixed(3);
            let metric_unit = convert_data[i].metric_unit;

            // imperial variables:
            let imperial_value = user_input.value * convert_data[i].rate;
            let imperial_fixed = imperial_value.toFixed(3);
            let imperial_unit = convert_data[i].imperial_unit;

            // getting the correct id from get_element function and editing HTML:
            let selector = get_element(convert_data[i].element_id);
            selector.innerHTML = `
                <span class="bold text-purple">${convert_data[i].name}</span><br />
                ${user_input.value} ${metric_unit} = ${imperial_fixed} ${imperial_unit} | 
                ${user_input.value} ${imperial_unit} = ${metric_fixed} ${metric_unit}
            `;
        };

    // called on page load & if user_input.value is ever "deleted":
    } else {
        user_input.value = 20;
        convert_btn();
    };
};

// returning correct id (either length, volume or mass)
function get_element(element_id) {
    return document.getElementById(element_id);
};
