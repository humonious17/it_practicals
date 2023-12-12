function submitForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const type = document.getElementById('type').value;
    const likes = document.getElementById('likes').value;
  
    // Create a Pet object
    const pet = {
      name: name,
      age: age,
      weight: weight,
      type: type,
      likes: likes
    };
  
    // Log the Pet object and its equivalent JSON
    console.log('Pet Object:', pet);
    console.log('JSON Equivalent:', JSON.stringify(pet));
  }
  