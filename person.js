const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);

//create new person record
const newPerson = new Person ({
  name : 'ALI',
  age : 15,
  favoriteFoods : ['salad','fish']
});

// save new person record
const savePerson = async () => {
    try {
      const savedPerson = await newPerson.save();
      console.log('Person saved successfully:', savedPerson);
    } catch (error) {
      console.error('Error occurred while saving person:', error);
    }
  };
  savePerson();

  const arrayOfPerson = [{
    name : 'MOHAMED',
    age : 25,
    favoriteFoods : ['pasta','fish']
},
{
    name : 'AMANI',
    age : 28,
    favoriteFoods : ['pasta','vegetable']
}];