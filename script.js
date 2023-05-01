function volume_sphere() {
            // get the radius input value
            const radiusInput = document.getElementById("radius");
            const radius = parseFloat(radiusInput.value);

            // calculate the volume of the sphere
            const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

            // display the volume in the volume field
            const volumeField = document.getElementById("volume");
            volumeField.value = volume.toFixed(4); // round to 2 decimal places
        }