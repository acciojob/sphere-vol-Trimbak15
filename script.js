function calculateVolume() {
      // Get the value of the radius input field
      let radius = document.getElementById("radius").value;

      // Calculate the volume of the sphere
      let volume = volume_sphere(radius);

      // Display the volume in the output field
      document.getElementById("volume").value = volume;
    }

    function volume_sphere(radius) {
      // Calculate the volume of a sphere given its radius
      let volume = (4/3) * Math.PI * Math.pow(radius, 3);
      return volume;
    }

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
