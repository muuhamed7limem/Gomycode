// Import mongoose
const mongoose = require('mongoose');

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// Define the schema for a Person
const personSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name is required
  age: Number,                           // Optional age field
  favoriteFoods: [String],               // Array of strings for favorite foods
});

// Create the Person model
const Person = mongoose.model('Person', personSchema);

// Create and save a single document
const createAndSavePerson = (done) => {
  const person = new Person({
    name: 'Mohamed Limem',
    age: 22,
    favoriteFoods: ['Pizza', 'Burger'],
  });

  // Save the document to the database
  person.save((err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

// Create multiple Person records
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

// Find people by name
const findPeopleByName = (name, done) => {
  Person.find({ name }, (err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

// Find one person by a favorite food
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

// Find a person by their _id
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

// Add "Coscous" to a person's favoriteFoods array
const findEditThenSave = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return done(err);

    person.favoriteFoods.push('Coscous');
    person.save((err, updatedPerson) => {
      if (err) return done(err);
      done(null, updatedPerson);
    });
  });
};

// Update a person's age to 20
const findAndUpdate = (personName, done) => {
  Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true }, // Return the updated document
    (err, updatedPerson) => {
      if (err) return done(err);
      done(null, updatedPerson);
    }
  );
};

// Delete one person by _id
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedPerson) => {
    if (err) return done(err);
    done(null, removedPerson);
  });
};

// Delete all people named "Mary"
const removeManyPeople = (done) => {
  Person.remove({ name: 'Mary' }, (err, result) => {
    if (err) return done(err);
    done(null, result);
  });
};

// Find people who like burritos, sort, limit, and hide age
const queryChain = (done) => {
  Person.find({ favoriteFoods: 'burritos' })
    .sort({ name: 1 })    // Sort by name in ascending order
    .limit(2)             // Limit to 2 results
    .select('-age')       // Exclude the age field
    .exec((err, data) => {
      if (err) return done(err);
      done(null, data);
    });
};

